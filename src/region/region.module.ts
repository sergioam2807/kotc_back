import { Module } from '@nestjs/common';
import { RegionController } from './region.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [RegionController],
  providers: [PrismaService],
})
export class RegionModule {}
