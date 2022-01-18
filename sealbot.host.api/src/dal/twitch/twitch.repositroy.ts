import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Observable, map } from "rxjs";
import * as twitch from './twitch.content'

@Injectable()
export class TwitchRepository{

    constructor(
        private readonly httpService: HttpService
        ) {}

    getOauthAuthorizePageUrl(message: twitch.OauthAuthorizePageUrlMessage): string {
        const baseUrl = new URL(twitch.TwitchApis.OauthAuthorizePageBaseUrl);
        const urlParams = new URLSearchParams(baseUrl.search);
        for (const key in message){
            if (message[key] !== undefined){
                urlParams.set(key, message[key]);
            }
        }
        baseUrl.search = urlParams.toString();
        return baseUrl.toString();
    }

    getToken(message: twitch.OauthGetTokenMessage): Observable<twitch.OauthGetTokenResponse> {
        return this.httpService.post(twitch.TwitchApis.OauthAuthorizeGetToken, null, {
            params: message
        }).pipe(
            map(res => res.data)
        );
    }
}