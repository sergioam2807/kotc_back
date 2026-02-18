import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingTargetType } from '@prisma/client';

@Injectable()
export class RatingService {
  constructor(private prisma: PrismaService) {}

  async create(createRatingDto: CreateRatingDto) {
    return this.prisma.rating.create({ data: createRatingDto });
  }

    async getByEntity(targetType: RatingTargetType, targetId: number) {
      return this.prisma.rating.findMany({
        where: { targetType, targetId },
      });
  }

  async getByUser(userId: number) {
    return this.prisma.rating.findMany({
      where: { userId },
    });
  }
}
