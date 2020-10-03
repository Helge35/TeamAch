import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamService } from 'src/app/common/services/team.service';
import { JournalEntry } from './models/journal-entry';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements OnInit {

  entryId: number;
  entry: JournalEntry = new JournalEntry();
  selectedCriteriyaId : number = 0;

  selectCritetiya() {

  }

  setSelected(id: number){
    this.selectedCriteriyaId = id;
  }

  constructor(public activeModal: NgbActiveModal, private teamService: TeamService) { }

  ngOnInit(): void {
    if (this.entryId && this.entryId > 0) {
      this.teamService.getJournalEntry(this.entryId).subscribe(m => this.entry = m);
    } else {
      this.entry = new JournalEntry();
    }
  }
}