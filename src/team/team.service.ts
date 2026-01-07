import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    // Solo incluir los campos válidos para evitar errores
    const {
      name,
      logoUrl,
      ownerId,
      preferredCourt,
      isKotc,
      homeCourt,
      description,
      colorPrimary,
      colorSecondary,
      coverImageUrl,
      region,
      city
    } = data;
    return this.prisma.team.create({
      data: {
        name,
        logoUrl,
        ownerId,
        preferredCourt,
        isKotc,
        homeCourt,
        description,
        colorPrimary,
        colorSecondary,
        coverImageUrl,
        region,
        city
      }
    });
  }

  async findAll() {
    return this.prisma.team.findMany({ include: { owner: true, players: true, invitations: true } });
  }

  async findOne(id: number) {
    return this.prisma.team.findUnique({ where: { id }, include: { owner: true, players: true, invitations: true } });
  }

  async update(id: number, data: any) {
    // Solo incluir los campos válidos para evitar errores
    const {
      name,
      logoUrl,
      ownerId,
      preferredCourt,
      isKotc,
      homeCourt,
      description,
      colorPrimary,
      colorSecondary,
      coverImageUrl,
      region,
      city
    } = data;
    return this.prisma.team.update({
      where: { id },
      data: {
        name,
        logoUrl,
        ownerId,
        preferredCourt,
        isKotc,
        homeCourt,
        description,
        colorPrimary,
        colorSecondary,
        coverImageUrl,
        region,
        city
      }
    });
  }

  async remove(id: number) {
    return this.prisma.team.delete({ where: { id } });
  }
}
