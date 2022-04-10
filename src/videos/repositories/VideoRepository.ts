import { Injectable } from '@nestjs/common';
import { Video } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateVideoDTO } from '../dtos/create-video-dto';

@Injectable()
export class VideoRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateVideoDTO): Promise<Video>{
        return await this.prisma.video.create({ data })
    }

    async listFreeContent(): Promise<Video[]>{
        return await this.prisma.video.findMany({
            where: { exclusive_content: false }
        })
    }

    async listAll(): Promise<Video[]>{
        return await this.prisma.video.findMany()
    }

    async delete(video_code: string): Promise<Video>{
        return await this.prisma.video.delete({
            where: { video_code: video_code }
        })
    }
}
