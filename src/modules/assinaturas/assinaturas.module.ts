import { AssinaturaController } from './controllers/Assinatura.controller';
import { Module } from '@nestjs/common';
import { AssinaturaRepository } from './repositories/AssinaturaRepository';
import { AssinaturaService } from './services/Assinatura.service';
import { PrismaService } from 'src/shared/infra/prisma/services/prisma.service';

@Module({
  providers: [AssinaturaService, AssinaturaRepository, PrismaService],
  controllers: [AssinaturaController],
})
export class AssinaturasModule {}
