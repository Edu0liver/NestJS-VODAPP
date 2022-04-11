import { HttpException, Injectable } from "@nestjs/common";
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

    async create(data: CreateVideoDTO, user_id: string): Promise<Video>{
        const user = await this.usersRepository.findById(user_id);

        if(!user.is_admin){
            throw new HttpException({message: "Ação não autorizada!"}, 401)
        }
        
        return await this.videosRepository.create(data, user_id)
    }

    async list(user_id: string): Promise<Video[]>{
        const user = await this.usersRepository.findById(user_id);

        if(user.subscribed === true){
            return await this.videosRepository.listAll();
        }

        return await this.videosRepository.listFreeContent()
    }

    async deleteVideo(data: DeleteVideoDTO, user_id: string): Promise<Video>{
        const user = await this.usersRepository.findById(user_id);

        if(!user.is_admin){
            throw new HttpException({message: "Ação não autorizada!"}, 401)
        }
        
        return await this.videosRepository.delete(data.video_code)
    }
    
}