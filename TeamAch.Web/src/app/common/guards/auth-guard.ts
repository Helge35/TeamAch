import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from '../services/login.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private jwtHelper: JwtHelperService, private loginService: LoginService) {
    }

    canActivate() {
        const token = localStorage.getItem(this.loginService.tokenName);
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        this.router.navigate(["/"]);
        return false;
    }
}