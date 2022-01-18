import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { TwitchRepository } from "./twitch.repositroy";

@Module({
    imports: [HttpModule],
    providers: [TwitchRepository],
    exports: [TwitchRepository]
  })
export class DalTwitchModule {}