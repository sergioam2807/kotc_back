import { Module } from '@nestjs/common';
import { PlayerTeamService } from './player-team.service';
import { PlayerTeamController } from './player-team.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PlayerTeamController],
  providers: [PlayerTeamService, PrismaService],
  exports: [PlayerTeamService],
})
export class PlayerTeamModule {}
