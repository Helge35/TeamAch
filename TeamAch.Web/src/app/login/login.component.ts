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
    this.service.login(form.value.username, form.value.password);
  }

  constructor(private router: Router, private service: LoginService) { }
  ngOnInit(): void {

    this.service.onUserLogin.subscribe(u => {
      if (u) {
        this.router.navigate(['/team']);
      }
    });

    if (this.service.isUserAuthenticaded()) {
      this.router.navigate(['/team']);
    }
  }

}
