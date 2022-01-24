import { ApiTags, ApiResponse} from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Response, Query, Post, Body} from '@nestjs/common';
import { TwitchLoginService } from './twitch-login.service';
import { GetAuthorizePageUrlViewModel, GetTokenParameter, GetTokenViewModel, RefreshTokenParameter } from './twitch-login.model';

@ApiTags('twitch-login')
@Controller('/api/twitch-login')
export class TwitchLoginController {
    
    constructor(
        private readonly loginService: TwitchLoginService
    ){}
    

    @Get('authorize-page-url')
    @ApiResponse({ status: HttpStatus.OK, type: GetAuthorizePageUrlViewModel, description: 'Get url for redirect to twitch authorize page'})
    getAuthorizePageUrl(@Response() response){
        const viewModel = this.loginService.getAuthorizePageUrl();
        response.status(HttpStatus.OK).json(viewModel);
    }

    @Get('token')
    @ApiResponse({ status: HttpStatus.OK, type: GetTokenViewModel, description: 'get access token from twitch'})
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: String, description: 'error message'})
    getAccessToken(@Response() response, @Query() query: GetTokenParameter){
        this.loginService.getToken(query).subscribe({
            next: (vm) => {
                console.log(`login and get token ${vm.accessToken}, ${vm.refreshToken}`)
                response.status(HttpStatus.OK).json(vm);
            },
            error: (error) => {
                console.log(error);
                response.status(HttpStatus.BAD_REQUEST).json(`login failed with error: ${error}`)
            }
        })
    }

    @Post('/token')
    @ApiResponse({status: HttpStatus.OK, type: GetTokenViewModel, description: 'refresh access token from twitch'})
    refreshToken(@Response() response, @Body() body: RefreshTokenParameter){
        console.log(body.refreshToken);
        this.loginService.refreshToken(body).subscribe({
            next: (vm) => {
                console.log(`refresh token and get token ${vm.accessToken}, ${vm.refreshToken}`);
                response.status(HttpStatus.OK).json(vm);
            },
            error: (error) => {
                console.log(error);
                response.status(HttpStatus.UNAUTHORIZED).json(`Refresh Token Failed: ${error}`)
            }
        })
        
    }
}
