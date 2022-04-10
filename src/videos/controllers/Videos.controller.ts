import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/guards/jwt.auth.guard';
import { CreateVideoDTO } from '../dtos/create-video-dto';
import { DeleteVideoDTO } from '../dtos/delete-video-dto';
import { ListVideoDTO } from '../dtos/list-video-dto';
import { VideosService } from '../services/Videos.service';

@UseGuards(JwtAuthGuard)
@Controller('videos')
export class VideosController {

    constructor(private videosService: VideosService) {}

    @Post('create')
    async create(@Body() dto: CreateVideoDTO){
        return await this.videosService.create(dto)
    }

    @Get("list/:id")
    async listAll(@Param() id: ListVideoDTO){
        return await this.videosService.list(id);
    }

    @Delete('delete')
    async deleteVideo(@Body() dto: DeleteVideoDTO){
        return await this.videosService.deleteVideo(dto);
    }
}
