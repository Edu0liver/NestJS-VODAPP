import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { JwtAuthGuard } from "../guards/jwt.auth.guard";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import { AuthenticationService } from "../services/Authentication.service";

@Controller('auth')
export class AuthenticationController {

    constructor(private authenticationService: AuthenticationService){}

    @UseGuards(LocalAuthGuard)
    @Post("signin")
    async login(@Request() req: any){
        return await this.authenticationService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Request() req: any) {
        return req.user;
    }
}