import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})

export class LoginService {

  url = environment.url + 'auth/';

  tokenName:string = 'jwtTeamAchToken';

  login(credentials: { username: string; password: string; }) {
    return this.http.post(  this.url+ 'login', credentials );
  }

  isUserAuthenticaded(){
    const token: string = localStorage.getItem(this.tokenName);
    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else{
      return false;
    }
  }

  logout() {
   localStorage.removeItem(this.tokenName);
   this.router.navigate(['/']);
  }

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }
}