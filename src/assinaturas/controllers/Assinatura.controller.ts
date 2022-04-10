import { Body, Controller, Param, Post } from '@nestjs/common';
import { Assinatura } from '@prisma/client';
import { CreateAssinaturaDTO } from '../dtos/create-assinatura-dto';
import { AssinaturaService } from '../services/Assinatura.service';

@Controller('sign')
export class AssinaturaController {

    constructor(private assinaturaService: AssinaturaService){}

    @Post('service')
    async create(@Body() dto: CreateAssinaturaDTO): Promise<Assinatura>{
        return await this.assinaturaService.create(dto);
    }

    @Post('assinar')
    async assinar(
        @Body() assinatura_id: string,
        @Param() user_id: string
    ){
        const data = { assinatura_id, user_id };
        return await this.assinaturaService.assinar(data);
    }

}
