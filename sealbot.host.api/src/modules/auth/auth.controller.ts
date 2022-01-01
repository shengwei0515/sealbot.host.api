import { Controller, Get, Post, Request, Response, Query, Next, HttpStatus, Body, HttpException, UseGuards } from "@nestjs/common";
import { AuthLoginParameter } from "./auth.parameter";
import { AuthService } from "./auth.services";
import { ApiTags } from "@nestjs/swagger";
import { TwitchRepository } from "../dal/twitch/twitch.repositoy";

@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {

    constructor(
        private authService: AuthService,
        private twitchRepo: TwitchRepository
    ){}

    @Get("/login")
    getAuth(@Response() res, @Query() query: AuthLoginParameter) {
        this.twitchRepo.getTokenByCode(query.code).subscribe({
            next: (getTokenResponse) => {
                console.log(getTokenResponse);
                res.status(HttpStatus.OK).json(getTokenResponse);
            },
            error: (error) => {
                console.log(`Get token failed with error ${error}`);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({msg: "GetTokenFailed"})
            } 
        });
    }
}