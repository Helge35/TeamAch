import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent implements OnInit {

isUserAuthenticaded(){
  const token: string = localStorage.getItem("jwtTeamAchToken");
  if(token){
    return true;
  }
  else{
    return false;
  }
}


  constructor() { }

  ngOnInit(): void {
  }

}
