import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { FieldService } from './field.service';
import { CreateFieldDto } from './dto/create-field.dto';

@Controller('fields')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Get()
  findAll(
    @Query('lat') lat?: number,
    @Query('lng') lng?: number,
    @Query('modality') modality?: string
  ) {
    // Si se pasan coordenadas, podrías filtrar por cercanía y modalidad
    return this.fieldService.findAll(lat, lng, modality);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('modality') modality?: string
  ) {
    return this.fieldService.findOne(+id, modality);
  }

  @Post()
  create(@Body() createFieldDto: CreateFieldDto) {
    return this.fieldService.create(createFieldDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFieldDto: Partial<CreateFieldDto>) {
    return this.fieldService.update(+id, updateFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldService.remove(+id);
  }
}
