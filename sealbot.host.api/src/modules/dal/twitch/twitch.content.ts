export class TwitchApis {
    public static OIDC_GET_TOKEN = 'https://id.twitch.tv/oauth2/token'
}

export type TwitchOauthGetTokenParameter = {
    client_id: string;
    client_secret: string;
    code: string;
    grant_type: string;
    redirect_uri: string;
}

export type TwitchOauthGetTokenResponse = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string[];
    token_type: string;
    id_token: string;
}