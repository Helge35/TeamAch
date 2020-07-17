import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TeamService } from '../common/services/team.service';
import { Member } from '../common/models/member';
import { Message } from '../common/models/message';
import { Project } from '../common/models/project';


@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {

  team: Member[];
  messagesList : Message[];
  projectList : Project[];


  constructor(private _teamService: TeamService) {
  }

  ngOnInit(): void {
 
    this._teamService.getTeamAll().subscribe(t => this.team = t);
    this._teamService.getProjects().subscribe(p => this.projectList = p);
    this._teamService.getMessages().subscribe(r => this.messagesList = r);
  }
}
