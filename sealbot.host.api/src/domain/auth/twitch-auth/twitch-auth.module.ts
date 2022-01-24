import { Module } from '@nestjs/common';
import { TwitchAuthController } from './twitch-auth.controller';
import { TwitchAuthService } from './twitch-auth.service';
import { DalTwitchModule } from 'src/dal/twitch/twitch.module';

@Module({
  imports: [DalTwitchModule],
  controllers: [TwitchAuthController],
  providers: [TwitchAuthService]
})
export class TwitchAuthModule {}
