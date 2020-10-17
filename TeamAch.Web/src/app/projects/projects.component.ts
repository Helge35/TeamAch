import { Component, OnInit, Type } from '@angular/core';

import { TeamService } from '../common/services/team.service';
import { Project } from '../common/models/project';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { Skill } from '../common/models/skill';
import { Role } from '../common/models/role';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsList: Project[];
  skills: Skill[];
  roles: Role[];

  openProjectDetails(projectId: number): void {
    const modalDetails = this._modalService.open(ProjectDetailsComponent);

    modalDetails.componentInstance.skills = this.skills;
    modalDetails.componentInstance.roles = this.roles.filter(r => r.id > 0);
    modalDetails.componentInstance.newProjectEmmit.subscribe((proj) => this.saveAndUpdateProject(proj));

    if (projectId == 0) {
      modalDetails.componentInstance.project = new Project();
    } else {
      modalDetails.componentInstance.project = this.projectsList.find(p => p.id === projectId);
    }
  }

  saveAndUpdateProject(proj: Project) {
    if (!proj.id || proj.id == 0) {
      this.projectsList.push(proj);
    }

  }

  constructor(private _teamService: TeamService, private _modalService: NgbModal) {
  }

  ngOnInit(): void {
    this._teamService.getProjects().subscribe(p => this.projectsList = p);
    this._teamService.getSkills().subscribe(s => this.skills = s);
    this._teamService.getRoles().subscribe(r => this.roles = r);
  }
}
