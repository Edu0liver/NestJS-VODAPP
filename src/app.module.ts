import { VideosController } from './videos/controllers/Videos.controller';
import { VideoRepository } from './videos/repositories/VideoRepository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersController } from './users/controllers/Users.controller';
import { UsersRepository } from './users/repositories/UsersRepository';
import { UsersService } from './users/services/Users.service';
import { VideosService } from './videos/services/Videos.service';

@Module({
  imports: [],
  controllers: [
    VideosController, UsersController],
  providers: [
    VideoRepository, VideosService, UsersService, UsersRepository, PrismaService
  ],
})
export class AppModule { }
