import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Member } from '../common/models/member';
import { TeamService } from '../common/services/team.service';
import { Role } from '../common/models/role';
import { Absence } from '../common/models/absence';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  member: Member = new Member();
  roles: Role[] = [];
  id: number;
  fromAbsenceDateModel: NgbDateStruct;
  toAbsenceDateModel: NgbDateStruct;

  addAbsence() {
    let abc = new Absence();
    abc.from = new Date(this.fromAbsenceDateModel.year, this.fromAbsenceDateModel.month, this.fromAbsenceDateModel.day);
    abc.to = new Date(this.toAbsenceDateModel.year, this.toAbsenceDateModel.month, this.toAbsenceDateModel.day);
   // this.teamService.addAbsence(abc).subscribe(a => {
     // abc.id = a;
      this.member.absences.push(abc);
   // });
  }

  removeAbsence(id: number) {
    let abc = this.member.absences.find(x => x.id == id);
  //  this.teamService.removeAbsence(id);
  this.member.absences = this.member.absences.filter(obj => obj.id != id);
  }


  constructor(private route: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = +params['id']; });
    if (this.id) {
      this.teamService.GetMemberById(this.id).subscribe(m => this.member = m);
    } else {
      this.member = new Member();
    }

    this.teamService.getRoles().subscribe(r => this.roles = r);
  }
}
