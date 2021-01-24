import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Member } from 'src/app/common/models/member';
import { JournalEntry } from 'src/app/common/models/journal-entry';
import { Criteria } from 'src/app/common/models/criteria';
import { JournalEntryComponent } from '../journal-entry/journal-entry.component';
import { TeamService } from 'src/app/common/services/team.service';

@Component({
  selector: 'app-team-details-journal',
  templateUrl: './team-details-journal.component.html',
  styleUrls: ['./team-details-journal.component.scss']
})
export class TeamDetailsJournalComponent implements OnInit {

  @Input()
  member: Member;
  journalTasksList: JournalEntry[] = [];
  criteriesList: Criteria[] = [];
  fromDateModel: NgbDateStruct;
  toDateModel: NgbDateStruct;

  openEntryDetails(id: number) {
    const modalDetails = this.modalService.open(JournalEntryComponent, { centered: true, scrollable: true });
    modalDetails.componentInstance.entryId = id;
    modalDetails.componentInstance.criteriesList = this.criteriesList;
  }

  constructor(private modalService: NgbModal, private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getJournalTasksByMemeber(this.member.id).subscribe(j => this.journalTasksList = j);
    this.teamService.getCriteries().subscribe(c => { this.criteriesList = c; });
  }

}
