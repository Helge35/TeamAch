import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class LoginService {

  url = 'http://localhost:5001/api/auth/';

  login(credentials: { username: string; password: string; }) {
    return this.http.post(  this.url+ 'login', credentials );
  }

  constructor(private http: HttpClient) { }
}