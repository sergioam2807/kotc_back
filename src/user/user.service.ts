
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async upsertUserFromJwt(payload: { email: string; name?: string; auth0Id?: string; picture?: string }) {
    console.log('UpsertUserFromJwt payload:', payload);
    if (!payload.email) {
      throw new Error('Email is required to upsert user');
    }
    if (!payload.auth0Id) {
      throw new Error('auth0Id is required to upsert user');
    }
    return this.prisma.user.upsert({
      where: { email: payload.email },
      update: {
        lastLogin: new Date(),
        name: payload.name,
        picture: payload.picture,
        auth0Id: payload.auth0Id,
      },
      create: {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        auth0Id: payload.auth0Id,
        lastLogin: new Date(),
      },
    });
  }

    async getAll() {
    return this.prisma.user.findMany();
    }
}
