export class TwitchApis {
    public static OauthAuthorizePageBaseUrl = "https://id.twitch.tv/oauth2/authorize"
    public static OauthAuthorizeGetToken = "https://id.twitch.tv/oauth2/token"
}

export class OauthAuthorizePageUrlMessage {
    client_id: string;
    redirect_uri: URL;
    response_type: string;
    scope: string;
    force_verify?: boolean;
    state?: string;
}

export class OauthGetTokenMessage {

    constructor(clientId: string, clientSecret: string, code: string, redirectUri: string){
        this.client_id = clientId;
        this.client_secret = clientSecret;
        this.code = code;
        this.redirect_uri = redirectUri;
    }

    client_id: string;
    client_secret: string;
    code: string;
    grant_type: string = "authorization_code";
    redirect_uri: string;
}

export class OauthGetTokenResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    scope: string[];
    token_type: string;
}