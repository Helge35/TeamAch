import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamService } from 'src/app/common/services/team.service';
import { JournalEntry } from '../../common/models/journal-entry';
import { Criteria } from 'src/app/common/models/criteria';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements OnInit {

  entryId: number;
  criteriesList: Criteria[];
  entry: JournalEntry = new JournalEntry();
  newCriteriyaId: number;
  newCriteriaRate: number;



  addNewCreteriaToList() {

    let minId = Math.min.apply(Math, this.entry.criteries.map(function (o) { return o.id; }));
    if (minId > 0) {
      minId = 0;
    }
    let newCriteria: Criteria = this.criteriesList.find(x => x.id == this.newCriteriyaId);
    newCriteria.rate = this.newCriteriaRate;

    this.entry.criteries.push(newCriteria);

    this.criteriesList = this.criteriesList.filter(x => x.id != this.newCriteriyaId);
    this.newCriteriyaId = 0;
    this.newCriteriaRate = 0;
  }

  onSelectionChange(criteriya: Criteria, rate: number) {
    criteriya.rate = rate;
  }

  constructor(public activeModal: NgbActiveModal, private teamService: TeamService) { }

  ngOnInit(): void {
    if (this.entryId && this.entryId > 0) {
      this.teamService.getJournalEntry(this.entryId).subscribe(m => {
        this.entry = m;
        this.criteriesList = this.criteriesList.filter(x => !this.entry.criteries.map(x => x.id).includes(x.id))
      }
      );
    } else {
      this.entry = new JournalEntry();
    }
  }
}