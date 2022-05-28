import { PrismaService } from './../../../shared/infra/prisma/services/prisma.service';
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { CreateUserDTO } from "../dtos/create-user-dto";
import { DeleteUserDTO } from "../dtos/delete-user-dto";

@Injectable()
export class UsersRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateUserDTO): Promise<User>{
        return await this.prisma.user.create({ data })
    }

    async findByEmail(email: string): Promise<User>{
        return await this.prisma.user.findFirst({
            where: { email: email }
        })
    }
    
    async findById(user_id: string): Promise<User>{
        return await this.prisma.user.findFirst({
            where: { id: user_id }
        })
    }

    async findAll(): Promise<User[]>{
        return await this.prisma.user.findMany();
    }

    async nowSub(user_id: string): Promise<User>{
        return await this.prisma.user.update({
            data: { subscribed: true },
            where: { id: user_id }
        })
    }
    
    async deleteUser(data: DeleteUserDTO): Promise<User>{
        return await this.prisma.user.delete({
            where: { username: data.username } || { email: data.email }
        })
    }

}