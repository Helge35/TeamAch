import { Component, OnInit } from '@angular/core';

import { TeamService } from '../common/services/team.service';
import { Project } from '../common/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsList : Project[];


  constructor(private _teamService: TeamService) {
  }

  ngOnInit(): void {
    this.projectsList = this._teamService.projects;
  }
}
