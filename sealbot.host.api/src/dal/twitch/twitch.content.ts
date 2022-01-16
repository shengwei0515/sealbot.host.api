export class TwitchApis {
    public static OauthAuthorizePageBaseUrl = "https://id.twitch.tv/oauth2/authorize"
}

export type OAuthAuthorizePageUrlParameter = {
    client_id: string,
    redirect_uri: URL,
    response_type: string,
    scope: string,
    force_verify?: boolean,
    state?: string
}