import { Controller, Get, HttpStatus, Response} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
    
    @Get('/info')
    getUserInfo(@Response() response){
        response.status(HttpStatus.OK).json({'accountName': 'smallseal'})
    }
}
