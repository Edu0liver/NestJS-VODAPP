import { JwtAuthGuard } from './../../authentication/guards/jwt.auth.guard';
import {
  Body,
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Param,
} from '@nestjs/common';
import { Assinatura, CompraAssinatura } from '@prisma/client';
import { CreateAssinaturaDTO } from '../dtos/create-assinatura-dto';
import { AssinaturaService } from '../services/Assinatura.service';

@UseGuards(JwtAuthGuard)
@Controller('sign')
export class AssinaturaController {
  constructor(private assinaturaService: AssinaturaService) {}

  @Post('service')
  async create(
    @Body() dto: CreateAssinaturaDTO,
    @Request() req: any,
  ): Promise<Assinatura> {
    return await this.assinaturaService.create(dto, req.user.user_id);
  }

  @Post('assinar/:id')
  async assinar(@Param() assinatura_id: string, @Request() req: any) {
    const data = { assinatura_id, user_id: req.user.user_id };
    return await this.assinaturaService.assinar(data);
  }

  @Get('historic')
  async buyHistoric(@Request() req: any): Promise<CompraAssinatura[]> {
    return await this.assinaturaService.showHistoric(req.user.user_id);
  }
}
