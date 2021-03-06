import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@prisma/client";
import { Strategy } from "passport-local";
import { AuthenticationService } from "../services/Authentication.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authenticationService: AuthenticationService){
        super({
            usernameField: "email"
        })
    }

    async validate(email: string, password: string): Promise<User>{
        const user = await this.authenticationService.authentication(email, password);

        if(!user){
            throw new UnauthorizedException()
        }

        return user
    }
    
}