import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { randomBytes } from 'crypto';

@Injectable()
export class InvitationService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    // Generar token único
    const token = randomBytes(24).toString('hex');
    return this.prisma.invitation.create({
      data: {
        ...data,
        token,
      },
    });
  }

  async findAll() {
    return this.prisma.invitation.findMany({ include: { team: true } });
  }

  async findOne(id: number) {
    return this.prisma.invitation.findUnique({ where: { id }, include: { team: true } });
  }

  async update(id: number, data: any) {
    return this.prisma.invitation.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.invitation.delete({ where: { id } });
  }

    async findPending(email: string) {
      return this.prisma.invitation.findMany({
        where: { email, accepted: false },
        include: { team: true },
      });
    }

    async accept(id: number, body: any) {
      // Marcar invitación como aceptada
      const invitation = await this.prisma.invitation.update({
        where: { id },
        data: { accepted: true },
      });
      // Agregar jugador al equipo
      await this.prisma.playerTeam.create({
        data: {
          userId: body.userId,
          teamId: invitation.teamId,
          season: body.season || new Date().getFullYear(),
        },
      });
      return { message: 'Invitación aceptada y jugador agregado al equipo.' };
    }

    async reject(id: number) {
      // Eliminar invitación o marcar como rechazada (aquí la eliminamos)
      await this.prisma.invitation.delete({ where: { id } });
      return { message: 'Invitación rechazada y eliminada.' };
    }
  async acceptByToken(token: string, body: any) {
    // Buscar invitación por token
    const invitation = await this.prisma.invitation.findUnique({ where: { token } });
    if (!invitation || invitation.accepted) {
      throw new Error('Invitación no encontrada o ya aceptada');
    }
    // Marcar invitación como aceptada
    await this.prisma.invitation.update({
      where: { token },
      data: { accepted: true },
    });
    // Agregar jugador al equipo
    await this.prisma.playerTeam.create({
      data: {
        userId: body.userId,
        teamId: invitation.teamId,
        season: body.season || new Date().getFullYear(),
      },
    });
    return { message: 'Invitación aceptada y jugador agregado al equipo.' };
  }
}
