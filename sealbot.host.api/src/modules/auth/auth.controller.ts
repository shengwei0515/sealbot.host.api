import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body, HttpException } from "@nestjs/common";
import { AuthParameter } from "./auth.parameter";
import { AuthService } from "./auth.services";
import { AuthParameterValidationPipe } from "./auth.validation.pipe";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {

    constructor(
        private authService:AuthService
    ){}

    @Get()
    async getAuth(@Request() req, @Response() res, @Next() next) {
        await this.authService.getAllUsers().then((users)=>{
            res.status(HttpStatus.OK).json(users);
        }).catch((error)=>{
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Get("/exception")
    async getException(){
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    @Get('/:id')
    getAuthById(@Param() params){
        return {"id": params.id};
    }

    @Post()
    addAuth(@Response() res, @Body(new AuthParameterValidationPipe()) authParameter: AuthParameter){
        this.authService.addUser(authParameter).subscribe((users) => {
            res.status(HttpStatus.OK).json(users)
        })
    }

}