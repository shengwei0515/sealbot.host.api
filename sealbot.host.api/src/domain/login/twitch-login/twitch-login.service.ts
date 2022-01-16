import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import { TwitchRepository } from '../../../dal/twitch/twitch.repositroy'
import * as twitch from '../../../dal/twitch/twitch.content'
import { randomString } from 'src/core/Urils/randomString';


@Injectable()
export class TwitchLoginService {
    
    constructor(
        private readonly twitchRepo: TwitchRepository,
        private readonly config: ConfigService
    ){}

    getAuthorizePageUrl(){
        const getUrlParameter: twitch.OAuthAuthorizePageUrlParameter = {
            client_id: this.config.get('Twitch_Client_Id'),
            redirect_uri: this.config.get('Twitch_Auth_Redirct_Uri'),
            response_type: 'code',
            scope: 'user:read:email',
            force_verify: true,
            state: randomString(20),
        }
        return this.twitchRepo.getOAuthAuthorizePageUrl(getUrlParameter);
    }

}