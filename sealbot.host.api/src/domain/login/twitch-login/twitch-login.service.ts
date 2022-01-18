import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import { TwitchRepository } from '../../../dal/twitch/twitch.repositroy'
import { GetAuthorizePageUrlViewModel, GetTokenParameter, GetTokenViewModel } from "./twitch-login.model";
import { Observable, map } from "rxjs";
import * as twitch from '../../../dal/twitch/twitch.content'
import { randomString } from 'src/core/Urils/randomString';


@Injectable()
export class TwitchLoginService {
    
    constructor(
        private readonly twitchRepo: TwitchRepository,
        private readonly config: ConfigService
    ){}

    getAuthorizePageUrl(): GetAuthorizePageUrlViewModel{
        const getUrlParameter: twitch.OauthAuthorizePageUrlMessage = {
            client_id: this.config.get('Twitch_Client_Id'),
            redirect_uri: this.config.get('Twitch_Auth_Redirct_Uri'),
            response_type: 'code',
            scope: 'user:read:email',
            force_verify: true,
            state: randomString(20),
        }
        const viewModel: GetAuthorizePageUrlViewModel = {
            url: this.twitchRepo.getOauthAuthorizePageUrl(getUrlParameter)
        }

        return viewModel
    }

    getToken(parameter: GetTokenParameter): Observable<GetTokenViewModel> {
        const getTokenMessage = new twitch.OauthGetTokenMessage(
            this.config.get('Twitch_Client_Id'),
            this.config.get('Twitch_Client_Secret'),
            parameter.code,
            this.config.get('Twitch_Auth_Redirct_Uri')
        )

        return this.twitchRepo.getToken(getTokenMessage).pipe(map(getTokenResponse =>
            {
                const getTokenViewModel: GetTokenViewModel = {
                    accessToken: getTokenResponse.access_token,
                    refreshToken: getTokenResponse.refresh_token
                }
                return getTokenViewModel
            }
        ));
    }
}