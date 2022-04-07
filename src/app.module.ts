import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersController } from './users/controller/Users.controller';
import { UsersRepository } from './users/repositories/UsersRepository';
import { UsersService } from './users/services/Users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, UsersRepository, PrismaService],
})
export class AppModule {}
