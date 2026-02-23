
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFieldDto } from './dto/create-field.dto';

type KingOfTheCourtWithDetails = {
  id: number;
  modality: string;
  team?: any;
  user?: any;
};

@Injectable()
export class FieldService {
  constructor(private prisma: PrismaService) {}

  async findAll(lat?: number, lng?: number, modality?: string) {
    // Si quieres filtrar por cercanía, puedes agregar lógica aquí
    const fields = await this.prisma.field.findMany();
    const ratings = await this.prisma.rating.findMany({
      where: { targetType: 'field' }
    });
    // Obtener kings por modalidad para todos los fields
    const usedModality = modality || '1v1';
    const kotc = await this.prisma.kingOfTheCourt.findMany({
      where: { modality: usedModality },
      include: { team: true, user: true }
    });
    const kotcByField = kotc.reduce((acc, k) => {
      acc[k.fieldId] = {
        id: k.id,
        modality: k.modality,
        team: k.team,
        user: k.user
      };
      return acc;
    }, {} as Record<number, KingOfTheCourtWithDetails>);
    const result = fields.map(field => {
      const fieldRatings = ratings.filter(r => r.targetId === field.id);
      const avgRating = fieldRatings.length
        ? fieldRatings.reduce((sum, r) => sum + r.value, 0) / fieldRatings.length
        : 5;
      const kotc = kotcByField[field.id] || null;
      return { ...field, avgRating, kotc };
    });
    return result;
  }

  async findOne(id: number, modality?: string) {
    const field = await this.prisma.field.findUnique({ where: { id } });
    const ratings = await this.prisma.rating.findMany({
      where: { targetType: 'field', targetId: id }
    });
    const avgRating = ratings.length
      ? ratings.reduce((sum, r) => sum + r.value, 0) / ratings.length
      : 5;
    let kotc: KingOfTheCourtWithDetails | null = null;
    if (modality) {
      const foundKotc = await this.prisma.kingOfTheCourt.findFirst({
        where: { fieldId: id, modality },
        include: { team: true, user: true }
      });
      if (foundKotc) {
        kotc = {
          id: foundKotc.id,
          modality: foundKotc.modality,
          team: foundKotc.team,
          user: foundKotc.user
        };
      } else {
        kotc = null;
      }
    }
    return { ...field, avgRating, kotc };
  }

  async create(createFieldDto: CreateFieldDto) {
    const { comunaId, userId, teamId, ...rest } = createFieldDto;
    if (!userId) {
      const { BadRequestException } = await import('@nestjs/common');
      throw new BadRequestException('userId es obligatorio para crear una cancha y asignar king.');
    }
    // Validar que no exista una cancha con lat/lng muy similares, mismo nombre y misma comuna
    const tolerance = 0.0001;
    const existing = await this.prisma.field.findFirst({
      where: {
        latitude: {
          gte: createFieldDto.latitude - tolerance,
          lte: createFieldDto.latitude + tolerance,
        },
        name: createFieldDto.name,
        comunaId: createFieldDto.comunaId,
      },
    });
    if (existing) {
      const { BadRequestException } = await import('@nestjs/common');
      throw new BadRequestException('Ya existe una cancha con el mismo nombre, comuna y ubicación similar.');
    }
    // Crear la cancha
    const field = await this.prisma.field.create({
      data: {
        ...rest,
        comuna: { connect: { id: comunaId } },
      },
    });

    if (userId) {
      await this.prisma.kingOfTheCourt.create({
        data: {
          fieldId: field.id,
          modality: '1v1',
          userId
        }
      });
    }
    if (teamId) {
      await this.prisma.kingOfTheCourt.create({
        data: {
          fieldId: field.id,
          modality: '5v5',
          teamId
        }
      });
      // Actualizar preferredFieldId del equipo
      await this.prisma.team.update({
        where: { id: teamId },
        data: { preferredFieldId: field.id }
      });
    }
    return field;
  }

  async update(id: number, updateFieldDto: Partial<CreateFieldDto>) {
    return this.prisma.field.update({
      where: { id },
      data: updateFieldDto,
    });
  }

  async remove(id: number) {
    return this.prisma.field.delete({ where: { id } });
  }
}
