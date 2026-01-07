
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Get()
async findAll() {
    const teams = await this.teamService.findAll();
    if (!teams || teams.length === 0) {
      return { message: 'No teams found', teams: [] }
    }
    return teams;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(Number(id));
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(Number(id), updateTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(Number(id));
  }
}
