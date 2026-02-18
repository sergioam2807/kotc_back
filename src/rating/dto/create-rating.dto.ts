
import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export enum RatingTargetType {
  FIELD = 'field',
  TEAM = 'team',
  PLAYER = 'player',
}

export class CreateRatingDto {
  @IsInt()
  @Min(1)
  @Max(5)
  value: number; // 1 a 5

  @IsInt()
  userId: number;

  @IsEnum(RatingTargetType)
  targetType: RatingTargetType;

  @IsInt()
  targetId: number;

  @IsOptional()
  @IsString()
  comment?: string;
}
