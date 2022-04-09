import { HttpException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'bcrypt';
import { CreateUserDTO } from '../dtos/create-user-dto';
import { DeleteUserDTO } from '../dtos/delete-user-dto';
import { UsersRepository } from '../repositories/UsersRepository';

@Injectable()
export class UsersService {

    constructor(private usersRepository: UsersRepository){}

    async create(data: CreateUserDTO): Promise<User>{
        const emailAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(emailAlreadyExists){
            throw new HttpException({ message: "Email already exists"}, 404);
        }

        const passwordHash = await hash(data.password, 16);

        data.password = passwordHash;

        return await this.usersRepository.create(data);
    }

    async findAll(): Promise<User[]>{
        return await this.usersRepository.findAll();
    }

    async deleteUser(data: DeleteUserDTO): Promise<User>{

        if(!data.username || !data.email){
            throw new HttpException({ message: "Missing Information!"}, 404);
        }

        return await this.usersRepository.deleteUser(data)
    }
}
