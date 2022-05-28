import { AuthenticationService } from './services/Authentication.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './controllers/Authentication.controller';
import { PrismaService } from 'src/shared/infra/prisma/services/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_CONSTANT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthenticationService, PrismaService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
