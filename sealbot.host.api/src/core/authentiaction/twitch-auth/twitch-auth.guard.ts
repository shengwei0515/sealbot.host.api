import { Injectable, CanActivate, ExecutionContext, HttpStatus, HttpException} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Observable, throwError } from "rxjs";
import { TwitchRepository } from "src/dal/twitch/twitch.repositroy";

@Injectable()
export class TwitchAuthGuard implements CanActivate {

    constructor(
        private readonly config: ConfigService,
        private readonly twitchRepo: TwitchRepository
    ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const env = this.config.get('Nest_Env');
        // always pass for development
        // if(env === 'development') {
        //     return true;
        // }
        
        // varify twitch token
        let if_validated = false

        this.twitchRepo.validateToken(request.headers['Authorization']).subscribe({
            next: res => {
                console.log(res);
                if_validated = true;
            },
            error: error => {
                console.log(error.response.data);
            }
        })
        
        if (! if_validated){
            throw new HttpException('varify access token failed', 487)
        }
        
        return true
    }
}