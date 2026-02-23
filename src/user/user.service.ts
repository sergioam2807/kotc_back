

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async upsertUserFromJwt(payload: { email: string; name?: string; auth0Id?: string; picture?: string }) {
    console.log('UpsertUserFromJwt payload:', payload);
    if (!payload.email) {
      throw new Error('Email is required to upsert user');
    }
    if (!payload.auth0Id) {
      throw new Error('auth0Id is required to upsert user');
    }
    return this.prisma.user.upsert({
      where: { email: payload.email },
      update: {
        lastLogin: new Date(),
        name: payload.name,
        picture: payload.picture,
        auth0Id: payload.auth0Id,
      },
      create: {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        auth0Id: payload.auth0Id,
        lastLogin: new Date(),
      },
    });
  }

    async getAll() {
      return this.prisma.user.findMany();
    }

    async getById(id: number) {
      return this.prisma.user.findUnique({ where: { id } });
    }
    
    async getByEmail(email: string) {
        // Obtener user primero
        const user = await this.prisma.user.findUnique({
          where: { email },
          include: {
            ownedTeams: {
              include: {
                preferredField: {
                  include: {}
                }
              }
            },
            kings: {
              include: {
                field: true,
                team: true
              }
            },
            playerTeams: {
              include: {
                team: true
              }
            }
          }
        });
        if (!user) return null;

        // PlayerStat
        const playerStat = await this.prisma.playerStat.findUnique({
          where: { userId: user.id }
        });
        const pointsPerGame = playerStat?.pointsPerGame ?? 0;
        const defensiveRating = playerStat?.defensiveRating ?? 0;
        const globalRanking = playerStat?.globalRanking ?? 0;
        const rankingChange = playerStat?.rankingChange ?? 0;

        // TeamStat (solo si el usuario es owner de algún equipo)
        let teamChemistry: number | null = null;
        let defensiveGrade: string | null = null;
        if (playerStat && typeof playerStat.defensiveRating === 'number') {
          defensiveGrade = playerStat.defensiveRating > 90 ? 'A' : playerStat.defensiveRating > 80 ? 'B' : 'C';
        }
        if (user.ownedTeams && user.ownedTeams.length > 0) {
          const teamStat = await this.prisma.teamStat.findUnique({
            where: { teamId: user.ownedTeams[0].id }
          });
          teamChemistry = typeof teamStat?.chemistry === 'number' ? teamStat.chemistry : null;
        }

      // ...existing code...

      // Ranking de potencia: promedio de winrate de equipos donde es owner
      // Ranking personal (1v1)
      let personalRanking: number | null = null;
      let personalRecord: string | null = null;
      let personalStreak: string | null = null;
      // Ranking por equipo (5v5, 3v3, 2v2)
      let teamRanking: number = 1;
      let teamRecord: string = '0-0';
      let teamStreak: string = 'W0';

      // Calcular stats personales (1v1)
      const kings1v1 = user.kings.filter(k => k.modality === '1v1');
      const games1v1 = kings1v1.length;
      personalRanking = games1v1 > 0 ? 100 : 0;
      personalRecord = `${games1v1}-0`;
      personalStreak = `W${games1v1}`;

      // Calcular stats por equipo (5v5)
      if (user.ownedTeams && user.ownedTeams.length > 0) {
        const team = user.ownedTeams[0];
        const totalGames = team.wins + team.losses + team.draws;
        teamRanking = totalGames > 0 ? Number(((team.wins / totalGames) * 100).toFixed(1)) : 1;
        teamRecord = `${team.wins}-${team.losses}`;
        teamStreak = `W${team.wins}`;
      }

      return {
        ...user,
        personalRanking,
        personalRecord,
        personalStreak,
        teamRanking,
        teamRecord,
        teamStreak,
        pointsPerGame,
        defensiveRating,
        defensiveGrade,
        globalRanking,
        rankingChange,
        teamChemistry
      };
    }
}
