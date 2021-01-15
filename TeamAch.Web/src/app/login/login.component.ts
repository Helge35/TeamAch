import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
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
      localStorage.setItem(this.service.tokenName, token);
      this.invalidLogin = false;
      this.router.navigate(["/team"]);
    },
      err => {
        this.invalidLogin = true;
      });
  }


  constructor(private router: Router, private service: LoginService) { }
  ngOnInit(): void {
    if (this.service.isUserAuthenticaded()) {
      this.router.navigate(['/team']);
    }
  }

}
