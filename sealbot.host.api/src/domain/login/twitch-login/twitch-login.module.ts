import { Module } from '@nestjs/common';
import { TwitchLoginController } from './twitch-login.controller';
import { TwitchLoginService } from './twitch-login.service';
import { DalTwitchModule } from 'src/dal/twitch/twitch.module';

@Module({
  imports: [DalTwitchModule],
  controllers: [TwitchLoginController],
  providers: [TwitchLoginService]
})
export class TwitchLoginModule {}
