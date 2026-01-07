import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlayerTeamService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.playerTeam.create({ data });
  }

  async findAll() {
    return this.prisma.playerTeam.findMany({ include: { user: true, team: true } });
  }

  async findOne(id: number) {
    return this.prisma.playerTeam.findUnique({ where: { id }, include: { user: true, team: true } });
  }

  async update(id: number, data: any) {
    return this.prisma.playerTeam.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.playerTeam.delete({ where: { id } });
  }
}
