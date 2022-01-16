import { Module } from '@nestjs/common';
import { TwitchLoginController } from './twitch-login.controller';
import { TwitchLoginService } from './twitch-login.service';
import { TwitchRepository } from 'src/dal/twitch/twitch.repositroy';

@Module({
  controllers: [TwitchLoginController],
  providers: [TwitchLoginService, TwitchRepository]
})
export class TwitchLoginModule {}
