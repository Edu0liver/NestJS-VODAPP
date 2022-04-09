import { Injectable } from '@nestjs/common';
import { Video } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateVideoDTO } from '../dtos/create-video-dto';

@Injectable()
export class VideoRepositoryService {

    constructor(private prisma: PrismaService){}

    async create(data: CreateVideoDTO): Promise<Video>{
        return await this.prisma.video.create({ data })
    }

    async listAll(): Promise<Video[]>{
        return await this.prisma.video.findMany()
    }
}
