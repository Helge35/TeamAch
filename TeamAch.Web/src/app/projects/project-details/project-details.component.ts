import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { Project } from 'src/app/common/models/project';
import { Skill } from 'src/app/common/models/skill';
import { Role } from 'src/app/common/models/role';
import { SkillSum } from 'src/app/common/models/skillSum';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  @Output() newProjectEmmit: EventEmitter<Project> = new EventEmitter<Project>();

  project: Project;
  skills: Skill[];
  roles: Role[];
  newSkillName: string;
  newSkillSum: SkillSum[] = [];
  updateRoleCount: boolean;

  searchNewSkill = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.skills.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).map(s => s.name))
    )

  addNewSkill() {
    let newSkill = this.skills.find(v => v.name === this.newSkillName);
    newSkill.sum = this.newSkillSum.filter(s => s.count > 0);
    this.project.skills.push(newSkill);
    this.newSkillName = '';
    this.setNewSkillSum();
  }

  setNewSkillSum() {
    this.newSkillSum = [];
    this.roles.forEach(r => {
      this.newSkillSum.push({ role: r, count: 0 });
    });
  }

  closeAndSave() {
    this.newProjectEmmit.emit(this.project);
    this.modal.close();
  }

  constructor(public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.setNewSkillSum();
  }

}
