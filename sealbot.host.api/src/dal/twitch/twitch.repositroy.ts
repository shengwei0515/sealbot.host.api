import { Injectable } from "@nestjs/common";
import * as twitch from './twitch.content'

@Injectable()
export class TwitchRepository{

    getOAuthAuthorizePageUrl(parameter: twitch.OAuthAuthorizePageUrlParameter): URL {
        const baseUrl = new URL(twitch.TwitchApis.OauthAuthorizePageBaseUrl);
        const urlParams = new URLSearchParams(baseUrl.search);
        for (const key in parameter){
            if (parameter[key] !== undefined){
                urlParams.set(key, parameter[key]);
            }
        }
        baseUrl.search = urlParams.toString();
        return baseUrl;
    }
}