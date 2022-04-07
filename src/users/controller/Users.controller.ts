import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user-dto';
import { UsersService } from '../services/Users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('create')
    async create(@Body() dto: CreateUserDTO) {
        return await this.usersService.create(dto)
    }
}
