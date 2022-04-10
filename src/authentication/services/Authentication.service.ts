import { HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { compare } from "bcrypt";
import { UsersRepository } from "src/users/repositories/UsersRepository";
import { LoginDTO } from "../dtos/login.dto";

@Injectable()
export class AuthenticationService {

    constructor(
        private usersRepository: UsersRepository,
        private jwtService: JwtService,
    ){}

    async authentication(email: string, password: string): Promise<User>{
        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new HttpException({message: "Email or Password incorrect."}, 404);
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new HttpException({message: "Email or Password incorrect."}, 404);
        }

        return user;
    }

    async login(data: any){
        const payload = { sub: data.id, email: data.email, username: data.username };

        const token = this.jwtService.sign(payload);
        
        return token;
    }

}