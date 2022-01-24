import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './domain/user/user.module';
import { TwitchAuthModule } from './domain/auth/twitch-auth/twitch-auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.env'],
      isGlobal: true
    }),
    UserModule,
    TwitchAuthModule
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
