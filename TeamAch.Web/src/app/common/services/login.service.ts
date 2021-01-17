import { Injectable , Output, EventEmitter} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


import { environment } from 'src/environments/environment';
import { Member } from '../models/member';


@Injectable({
  providedIn: 'root',
})

export class LoginService {

  @Output()
  onUserLogin : EventEmitter<Member> = new EventEmitter<Member>();

  url = environment.url + 'auth/';
  tokenName: string = 'jwtTeamAchToken';
  user: Member = new Member();

  login(userName: string, pass: string): any {
    const credentials = {
      'username': userName,
      'password': pass
    };

    this.loginPrv(credentials).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem(this.tokenName, token);
      
      this.parseTokenData(token);
      return true;
    },
      err => {
        return false;
      });
  }

  parseExistedTokenData(){
    const token: string = localStorage.getItem(this.tokenName);
    this.parseTokenData(token);
  }

  parseTokenData(token){
    const decodedToken = this.jwtHelper.decodeToken(token);
    this.user.name= decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'];

    this.onUserLogin.emit(this.user);
  }

  loginPrv(credentials: { username: string; password: string; }) {
    return this.http.post(this.url + 'login', credentials);
  }

  isUserAuthenticaded() {
    const token: string = localStorage.getItem(this.tokenName);
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem(this.tokenName);
    this.onUserLogin.emit();
    this.router.navigate(['/']);
  }

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }
}