import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { format } from 'path';
import { LoginService } from '../common/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  login(form: NgForm) {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }
    this.service.login(credentials).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem('jwtTeamAchToken', token);
      this.invalidLogin = false;
      this.router.navigate["/"];
    },
    err=>{
      this.invalidLogin = true;
    });
  }

  constructor(private router: Router, private service: LoginService) { }
  ngOnInit(): void {
  }

}
