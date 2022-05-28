import { VideosController } from './controllers/Videos.controller';
import { VideosService } from './services/Videos.service';
import { Module } from '@nestjs/common';
import { VideoRepository } from './repositories/VideoRepository';
import { PrismaService } from 'src/shared/infra/prisma/services/prisma.service';

@Module({
  providers: [VideosService, VideoRepository, PrismaService],
  controllers: [VideosController],
})
export class VideosModule {}
