import { UsersController } from './controllers/Users.controller';
import { UsersRepository } from './repositories/UsersRepository';
import { UsersService } from './services/Users.service';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/infra/prisma/services/prisma.service';

@Module({
  providers: [UsersService, UsersRepository, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}
