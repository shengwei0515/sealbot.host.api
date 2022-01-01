import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';

export class AuthLoginParameter {

    @IsString()
    @ApiProperty()
    readonly code: string;

    @IsString()
    @ApiProperty()
    readonly scope: string;

    @IsString()
    @ApiProperty()
    readonly state?: string;
}

// export class TwitchGetTokenParameter {
//     client_id
//     client_secret
//     code
//     grant_type
//     redirect_uri
// }