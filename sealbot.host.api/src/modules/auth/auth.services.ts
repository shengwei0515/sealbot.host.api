import { Injectable } from "@nestjs/common";
import { AuthLoginParameter } from "./auth.parameter";
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
    // private users = [{name: "smallseal"}] as AuthParameter[]

    // getAllUsers(): Promise<AuthParameter[]> {
    //     return Promise.resolve(this.users);
    // }

    // addUser(user: AuthParameter): Observable<AuthParameter[]>{
    //     this.users.push(user);
    //     return of(this.users);
    // }
}