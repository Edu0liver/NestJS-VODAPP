import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { CreateUserDTO } from "../dtos/create-user-dto";

@Injectable()
export class UsersRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateUserDTO): Promise<User>{
        return await this.prisma.user.create({data})
    }

    async findByEmail(email: string): Promise<User>{
        return await this.prisma.user.findFirst({
            where: { email: email }
        })
    }
}