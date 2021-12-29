import { Module } from "@nestjs/common";
import { AuthService } from "./auth.services";
import { AuthController } from "./auth.controller";

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {
}