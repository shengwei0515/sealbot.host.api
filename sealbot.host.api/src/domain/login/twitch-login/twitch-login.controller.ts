import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Response} from '@nestjs/common';
import { TwitchLoginService } from './twitch-login.service';
import { GetAuthorizePageUrlViewModel } from './twitch-login.model';

@ApiTags('twitch-login')
@Controller('/api/twitch-login')
export class TwitchLoginController {
    
    constructor(
        private readonly loginService: TwitchLoginService
    ){}
    
    @Get('authorize-page-url')
    getAuthorizePageUrl(@Response() res){
        const viewModel: GetAuthorizePageUrlViewModel = {
            url: this.loginService.getAuthorizePageUrl()
        }
        res.status(HttpStatus.OK).json(viewModel);
    }
}
