import { VideoRepositoryService } from './videos/repositories/VideoRepository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersController } from './users/controllers/Users.controller';
import { UsersRepository } from './users/repositories/UsersRepository';
import { UsersService } from './users/services/Users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    VideoRepositoryService, UsersService, UsersRepository, PrismaService],
})
export class AppModule { }
