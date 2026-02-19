
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers() {
    const users = await this.userService.getAll();
    if (!users || users.length === 0) {
        return { message: 'No users found', users: [] };
    }
    return users;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userService.getById(Number(id));
    if (!user) {
      return { message: 'User not found', user: null };
    }
    return user;
  }
  @UseGuards(JwtAuthGuard)
  @Get('by-email/:email')
  async getUserByEmail(@Param('email') email: string) {
    const user = await this.userService.getByEmail(email);
    if (!user) {
      return { message: 'User not found', user: null };
    }
    return user;
  }
}