import { Module } from "@nestjs/common";
import { AuthService } from "./auth.services";
import { AuthController } from "./auth.controller";
import { TwitchModule } from "../dal/twitch/twitch.module";

@Module({
    imports: [TwitchModule],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {
}