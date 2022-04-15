import { AssinaturaController } from './assinaturas/controllers/Assinatura.controller';
import { VideosController } from './videos/controllers/Videos.controller';
import { VideoRepository } from './videos/repositories/VideoRepository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersController } from './users/controllers/Users.controller';
import { UsersRepository } from './users/repositories/UsersRepository';
import { UsersService } from './users/services/Users.service';
import { VideosService } from './videos/services/Videos.service';
import { AuthenticationService } from './authentication/services/Authentication.service';
import { LocalStrategy } from './authentication/strategies/local.strategy';
import { AuthenticationController } from './authentication/controllers/Authentication.controller';
import { AssinaturaService } from './assinaturas/services/Assinatura.service';
import { AssinaturaRepository } from './assinaturas/repositories/AssinaturaRepository';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './authentication/strategies/jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './authentication/guards/jwt.auth.guard';
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_CONSTANT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    AssinaturaController,
    VideosController,
    UsersController,
    AuthenticationController,
  ],
  providers: [
    PrismaService,
    LocalStrategy,
    JwtStrategy,
    AuthenticationService,
    UsersService,
    UsersRepository,
    VideoRepository,
    VideosService,
    AssinaturaService,
    AssinaturaRepository,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule { }
