import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/services/login.service';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  isUserAuthenticaded: boolean = false;
  userName: string;

  logout() {
    this.logInService.logout();
  }

  constructor(private logInService: LoginService) { }

  ngOnInit(): void {
    this.logInService.onUserLogin.subscribe(u => {
      if(u){
        this.isUserAuthenticaded = true;
        return this.userName = u.name;
      }else{
        this.isUserAuthenticaded = false;
        return this.userName ='';
      }
    
    });

    this.isUserAuthenticaded = this.logInService.isUserAuthenticaded();

    if (this.isUserAuthenticaded) {
      this.logInService.parseExistedTokenData();
    }
  }

}
