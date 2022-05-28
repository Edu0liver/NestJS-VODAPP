import { JwtAuthGuard } from './../../authentication/guards/jwt.auth.guard';
import { Body, Controller, Delete, Get, Post, Request, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDTO } from '../dtos/create-user-dto';
import { DeleteUserDTO } from '../dtos/delete-user-dto';
import { UsersService } from '../services/Users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('create')
    async create(@Body() dto: CreateUserDTO) {
        return await this.usersService.create(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Get('show')
    async findAll(@Request() req: any){
        return await this.usersService.findAll(req.user.user_id);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete("user")
    async deleteUser(
        @Body() dto: DeleteUserDTO,
        @Request() req: any
    ): Promise<User>{
        return await this.usersService.deleteUser(dto, req.user.user_id);
    }

}
