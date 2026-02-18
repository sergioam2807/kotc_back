
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFieldDto } from './dto/create-field.dto';

@Injectable()
export class FieldService {
  constructor(private prisma: PrismaService) {}

  async findAll(lat?: number, lng?: number) {
    // Si quieres filtrar por cercanía, puedes agregar lógica aquí
    const fields = await this.prisma.field.findMany();
    const ratings = await this.prisma.rating.findMany({
      where: { targetType: 'field' }
    });
    console.log('FIELDS:', fields);
    console.log('RATINGS:', ratings);
    const result = fields.map(field => {
      const fieldRatings = ratings.filter(r => r.targetId === field.id);
      const avgRating = fieldRatings.length
        ? fieldRatings.reduce((sum, r) => sum + r.value, 0) / fieldRatings.length
        : 5;
      return { ...field, avgRating };
    });
    console.log('RESULT:', result);
    return result;
  }

  async findOne(id: number) {
    const field = await this.prisma.field.findUnique({ where: { id } });
    const ratings = await this.prisma.rating.findMany({
      where: { targetType: 'field', targetId: id }
    });
    const avgRating = ratings.length
      ? ratings.reduce((sum, r) => sum + r.value, 0) / ratings.length
      : 5;
    return { ...field, avgRating };
  }

  async create(createFieldDto: CreateFieldDto) {
    const { comunaId, ...rest } = createFieldDto;
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
      // Lanzar excepción HTTP 400 para que el filtro global la maneje
      const { BadRequestException } = await import('@nestjs/common');
      throw new BadRequestException('Ya existe una cancha con el mismo nombre, comuna y ubicación similar.');
    }
    return this.prisma.field.create({
      data: {
        ...rest,
        comuna: { connect: { id: comunaId } },
      },
    });
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
