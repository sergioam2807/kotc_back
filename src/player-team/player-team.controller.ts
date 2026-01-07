import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PlayerTeamService } from './player-team.service';

@Controller('player-teams')
export class PlayerTeamController {
  constructor(private readonly playerTeamService: PlayerTeamService) {}

  @Post()
  create(@Body() data: any) {
    return this.playerTeamService.create(data);
  }

  @Get()
  findAll() {
    return this.playerTeamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerTeamService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.playerTeamService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerTeamService.remove(Number(id));
  }
}
