import { JwtAuthGuard } from './../../authentication/guards/jwt.auth.guard';
import { Body, Controller, Delete, Get, Request, Post, UseGuards } from '@nestjs/common';
import { request } from 'http';
import { CreateVideoDTO } from '../dtos/create-video-dto';
import { DeleteVideoDTO } from '../dtos/delete-video-dto';
import { ListVideoDTO } from '../dtos/list-video-dto';
import { VideosService } from '../services/Videos.service';

@UseGuards(JwtAuthGuard)
@Controller('videos')
export class VideosController {

    constructor(private videosService: VideosService) {}

    @Post('create')
    async create(
        @Body() dto: CreateVideoDTO,
        @Request() req: any
    ){
        return await this.videosService.create(dto, req.user.user_id)
    }

    @Get("list")
    async listAll(@Request() req: any){
        return await this.videosService.list(req.user.user_id);
    }

    @Delete('delete')
    async deleteVideo(
        @Body() dto: DeleteVideoDTO,
        @Request() req: any
    ){
        return await this.videosService.deleteVideo(dto, req.user.user_id);
    }
}
