import { IsString, IsUrl } from 'class-validator'
import { ApiProperty,  } from '@nestjs/swagger';

export class GetAuthorizePageUrlViewModel {
    @ApiProperty({
        description: 'url for redirect to twitch oauth authorize page'
    })
    @IsString()
    url: string;
}

export class GetTokenParameter {

    @ApiProperty({
        description: 'code from oauth code flow redirct query',
    })
    @IsString()
    code: string;

    @ApiProperty({
        description: 'scope from oauth code flow flow redirct query',
        required: false
    })
    @IsString()
    scope?: string;

    @ApiProperty({
        description: 'state from oauth code flow flow redirct query',
        required: false
    })
    @IsString()
    state?: string;
}

export class GetTokenViewModel {

    @ApiProperty({
        description: 'access token from twitch'
    })
    @IsString()
    accessToken: string;

    @ApiProperty({
        description: 'access token from twitch'
    })
    @IsString()
    refreshToken: string;
}

export class RefreshTokenParameter {

    @ApiProperty({
        description: 'refresh token to get token from twitch'
    })
    @IsString()
    refreshToken: string;
}