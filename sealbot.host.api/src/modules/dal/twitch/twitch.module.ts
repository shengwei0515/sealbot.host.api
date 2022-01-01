import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { TwitchRepository } from "./twitch.repositoy";

@Module({
    imports: [HttpModule],
    providers: [TwitchRepository],
    exports: [TwitchRepository]
})
export class TwitchModule {
}