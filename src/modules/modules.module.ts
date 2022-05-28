import { VideosModule } from './videos/videos.module';
import { UsersModule } from './users/users.module';
import { AssinaturasModule } from './assinaturas/assinaturas.module';
import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [AssinaturasModule, AuthenticationModule, UsersModule, VideosModule],
})
export class ModulesModule {}
