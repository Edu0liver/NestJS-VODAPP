import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
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

    @Get('show')
    async findAll(){
        return await this.usersService.findAll();
    }
    
    @Delete("user")
    async deleteUser(@Body() dto: DeleteUserDTO): Promise<User>{
        return await this.usersService.deleteUser(dto);
    }

}
