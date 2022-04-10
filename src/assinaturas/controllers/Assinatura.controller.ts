import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Assinatura, CompraAssinatura } from '@prisma/client';
import { JwtAuthGuard } from 'src/authentication/guards/jwt.auth.guard';
import { CreateAssinaturaDTO } from '../dtos/create-assinatura-dto';
import { AssinaturaService } from '../services/Assinatura.service';

@UseGuards(JwtAuthGuard)
@Controller('sign')
export class AssinaturaController {

    constructor(private assinaturaService: AssinaturaService){}

    @Post('service')
    async create(@Body() dto: CreateAssinaturaDTO): Promise<Assinatura>{
        return await this.assinaturaService.create(dto);
    }

    @Post('assinar/:id')
    async assinar(
        @Body() assinatura_id: string,
        @Param() user_id: string
    ){
        const data = { assinatura_id, user_id };
        return await this.assinaturaService.assinar(data);
    }

    @Get('historic')
    async buyHistoric(): Promise<CompraAssinatura[]>{
        return await this.assinaturaService.showHistoric();
    }

}
