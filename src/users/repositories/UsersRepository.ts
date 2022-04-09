import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
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

    async findAll(): Promise<User[]>{
        return await this.prisma.user.findMany();
    }
    
    async deleteUser(data: DeleteUserDTO): Promise<User>{
        return await this.prisma.user.delete({
            where: { username: data.username } || { email: data.email }
        })
    }
}