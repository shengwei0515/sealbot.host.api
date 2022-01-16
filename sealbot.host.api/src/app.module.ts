import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TwitchLoginModule } from './domain/login/twitch-login/twitch-login.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.env'],
      isGlobal: true
    }),
    TwitchLoginModule
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
