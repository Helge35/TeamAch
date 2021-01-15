import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/services/login.service';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  isUserAuthenticaded:boolean = false;

  logout() {
    this.logInService.logout();
  }

  constructor(private logInService: LoginService) { }

  ngOnInit(): void {
    this.isUserAuthenticaded = this.logInService.isUserAuthenticaded();
  }

}
