import { Injectable } from "@nestjs/common";
import { Video } from "@prisma/client";
import { UsersRepository } from "src/users/repositories/UsersRepository";
import { CreateVideoDTO } from "../dtos/create-video-dto";
import { DeleteVideoDTO } from "../dtos/delete-video-dto";
import { ListVideoDTO } from "../dtos/list-video-dto";
import { VideoRepository } from "../repositories/VideoRepository";

@Injectable()
export class VideosService {

    constructor(
        private videosRepository: VideoRepository,
        private usersRepository: UsersRepository
    ){}

    async create(data: CreateVideoDTO): Promise<Video>{
        return await this.videosRepository.create(data)
    }

    async list(data: ListVideoDTO): Promise<Video[]>{
        const user = await this.usersRepository.findById(data.user_id);

        if(user.subscribed === true){
            return await this.videosRepository.listAll();
        }

        return await this.videosRepository.listFreeContent()
    }

    async deleteVideo(data: DeleteVideoDTO): Promise<Video>{
        return await this.videosRepository.delete(data.video_code)
    }
    
}