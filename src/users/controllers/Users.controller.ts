import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/authentication/guards/jwt.auth.guard';
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
    async findAll(){
        return await this.usersService.findAll();
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete("user")
    async deleteUser(@Body() dto: DeleteUserDTO): Promise<User>{
        return await this.usersService.deleteUser(dto);
    }

}
