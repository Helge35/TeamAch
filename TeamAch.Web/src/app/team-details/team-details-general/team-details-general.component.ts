import { Component, OnInit, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AddMemberComponent } from '../../team-view/add-member/add-member.component';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Absence } from '../../common/models/absence';
import { Member } from 'src/app/common/models/member';
import { Role } from 'src/app/common/models/role';
import { TeamService } from '../../common/services/team.service';


@Component({
  selector: 'app-team-details-general',
  templateUrl: './team-details-general.component.html',
  styleUrls: ['./team-details-general.component.scss']
})
export class TeamDetailsGeneralComponent implements OnInit {

  @Input()
  member: Member ;
  fromAbsenceDateModel: NgbDateStruct;
  toAbsenceDateModel: NgbDateStruct;
  roles: Role[] = [];

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

  openNewMemberForm() {
    const modalDetails = this.modalService.open(AddMemberComponent, { centered: true, scrollable: true });
    modalDetails.componentInstance.member = this.member;
    modalDetails.componentInstance.isNewMember = false;
  }


  constructor(private route: ActivatedRoute, private teamService: TeamService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.teamService.getRoles().subscribe(r => this.roles = r);
  }

}
