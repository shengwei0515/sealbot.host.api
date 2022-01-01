import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { map, Observable, of } from "rxjs";
import { TwitchApis, TwitchOauthGetTokenParameter, TwitchOauthGetTokenResponse } from "./twitch.content";

@Injectable()
export class TwitchRepository {
    constructor(private httpService:HttpService){}

    getTokenByCode(grantCode: string): Observable<any>{
        const getTokentQuery: TwitchOauthGetTokenParameter = {
            client_id: process.env.Twitch_Client_Id,
            client_secret: process.env.Twitch_Client_Secret,
            code: grantCode,
            grant_type: "authorization_code",
            redirect_uri: process.env.Twitch_Oidc_Redirct_Uri
        }

        return this.httpService.post(TwitchApis.OIDC_GET_TOKEN, null, {
            params: getTokentQuery
        }).pipe(
            map(res => res.data)
        );
    }

    // verifyToken(access_token: string): Observable<any> {
        
    // }
}

