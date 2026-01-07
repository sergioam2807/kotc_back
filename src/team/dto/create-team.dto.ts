import { IsString, IsOptional, IsBoolean, IsInt } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  logoUrl?: string;

  @IsInt()
  ownerId: number;

  @IsOptional()
  @IsString()
  preferredCourt?: string;

  @IsOptional()
  @IsBoolean()
  isKotc?: boolean;

  @IsOptional()
  @IsString()
  homeCourt?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  colorPrimary?: string;

  @IsOptional()
  @IsString()
  colorSecondary?: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  coverImageUrl?: string;
}
