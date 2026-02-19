import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('regions')
export class RegionController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.region.findMany({
      select: {
        id: true,
        name: true,
        latitude: true,
        longitude: true,
        comunas: {
          select: {
            id: true,
            name: true,
            latitude: true,
            longitude: true
          }
        }
      }
    });
  }
}
