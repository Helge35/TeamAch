import { Component, OnInit } from '@angular/core';

import { TeamService } from '../common/services/team.service';
import { Member } from '../common/models/member';
import { Project } from '../common/models/project';
import { Skill } from '../common/models/skill';
import { WorkerSkill } from '../common/models/workerSkill';
import { Role } from '../common/models/role';
import { SkillSum } from '../common/models/skillSum';


@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

  team: Member[];
  projectList: Project[];
  skills: Skill[];
  roles: Role[];

  setWorkerSkills(): void {
    this.team.forEach(worker => {
      let tempSkills: WorkerSkill[] = [];

      this.skills.forEach(skill => {

        let ws = {} as WorkerSkill;
        ws.skillId = skill.id;

        let existedSkill = worker.skills.find(x => x.skillId == skill.id);
        if (existedSkill) {
          ws.levelId = existedSkill.levelId;

          let scillSum = skill.sum.find(x => x.roleId == ws.levelId);
          scillSum.count = scillSum.count +1;

        }
        else {
          ws.levelId = 0;
        }

        tempSkills.push(ws);
      });

      worker.skills = tempSkills;
    });
  }

  setSkillsSummery() {
    this.skills.forEach(skill => {

      this.roles.forEach(role => {
        if (role.id > 0) {
          let sum = {} as SkillSum;
          sum.count = 0;
          sum.roleName = role.shortName;
          sum.roleId = role.id;
          skill.sum.push(sum);
        }
      });
    });
  }

  onSkillChange(skillId: number) {
   let skill= this.skills.find(x=>x.id == skillId);
   skill.sum.forEach(s => {
     s.count =0;
   }); 

   this.team.forEach(worker => {
      let roleId = worker.skills.find(x => x.skillId == skill.id).levelId;
      if (roleId) {
        let scillSum = skill.sum.find(x => x.roleId == roleId);
        scillSum.count = scillSum.count +1;
      }
  });
}

  constructor(private _teamService: TeamService) {
  }

  ngOnInit(): void {
    this.skills = this._teamService.skills;
    this.team = this._teamService.team;
    this.projectList = this._teamService.projects;
    this.roles = this._teamService.roles;
    this.setSkillsSummery();
    this.setWorkerSkills();
  }
}
