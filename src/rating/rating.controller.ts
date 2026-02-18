import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { RatingTargetType } from '@prisma/client';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';

@Controller('ratings')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.create(createRatingDto);
  }

  // Obtener valoraciones por entidad (por ejemplo, todas las de una cancha)
  @Get('by-entity')
  getByEntity(@Query('targetType') targetType: string, @Query('targetId') targetId: number) {
    // Convierte el string recibido a enum (acepta 'field', 'team', 'player')
    const enumValue = RatingTargetType[targetType.toUpperCase() as keyof typeof RatingTargetType];
    return this.ratingService.getByEntity(enumValue, Number(targetId));
  }

  // Obtener valoraciones hechas por un usuario
  @Get('by-user')
  getByUser(@Query('userId') userId: number) {
    return this.ratingService.getByUser(Number(userId));
  }
}
