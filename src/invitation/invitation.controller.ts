import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { InvitationService } from './invitation.service';

@Controller('invitations')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  @Post()
  create(@Body() data: any) {
    return this.invitationService.create(data);
  }

  @Get()
  findAll() {
    return this.invitationService.findAll();
  }

    @Get('pending/:email')
    findPending(@Param('email') email: string) {
      return this.invitationService.findPending(email);
    }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invitationService.findOne(Number(id));
  }

    @Patch(':id/accept')
    accept(@Param('id') id: string, @Body() body: any) {
      return this.invitationService.accept(Number(id), body);
    }

    @Patch(':id/reject')
    reject(@Param('id') id: string) {
      return this.invitationService.reject(Number(id));
    }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.invitationService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitationService.remove(Number(id));
  }
  @Patch('accept-by-token/:token')
  acceptByToken(@Param('token') token: string, @Body() body: any) {
    return this.invitationService.acceptByToken(token, body);
  }
}
