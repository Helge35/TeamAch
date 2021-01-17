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
    this.invalidLogin = this.service.login(form.value.username, form.value.password);
    if(!this.invalidLogin)
      this.router.navigate(['/team']);
  }

  constructor(private router: Router, private service: LoginService) { }
  ngOnInit(): void {
    if (this.service.isUserAuthenticaded()) {
      this.router.navigate(['/team']);
    }
  }

}
