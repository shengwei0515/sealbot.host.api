import { Controller, Get, HttpStatus, Response, UseGuards} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { TwitchAuthGuard } from 'src/core/authentiaction/twitch-auth/twitch-auth.guard';

@ApiTags('user')
@Controller('user')
@ApiBearerAuth('access-token')
@UseGuards(TwitchAuthGuard)
export class UserController {
    
    @Get('/info')
    getUserInfo(@Response() response){
        response.status(HttpStatus.OK).json({'accountName': 'smallseal'})
    }
}
