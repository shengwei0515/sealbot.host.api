import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';

export class AuthParameter {

    @IsString()
    @ApiProperty()
    readonly name: string;
}