import { Injectable } from '@nestjs/common';
import { Video } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateVideoDTO } from '../dtos/create-video-dto';

@Injectable()
export class VideoRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateVideoDTO, user_id: string): Promise<Video>{
        return await this.prisma.video.create({
            data: {
                name: data.name,
                video_code: data.video_code,
                user_id: user_id,
                exclusive_content: data.exclusive_content,
            }
        })
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
