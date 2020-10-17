import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamService } from 'src/app/common/services/team.service';
import { JournalEntry } from '../../common/models/journal-entry';
import { Criteria } from 'src/app/common/models/criteria';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements OnInit {

  entryId: number;
  criteriesList: Criteria[];
  entry: JournalEntry = new JournalEntry();
  selectedCriteriyaId: number = 0;
  selectedCriteriya: Criteria = new Criteria();
  showSelectedCreteria: boolean = false;

  addCritetiya(show: boolean) {
    this.selectedCriteriya = this.criteriesList.find(x=>x.id == this.selectedCriteriyaId);
    this.showSelectedCreteria = show;
  }

  updateCritetiya(show: boolean) {
    this.selectedCriteriya = this.entry.criteries.find(x=>x.id == this.selectedCriteriyaId);
    this.showSelectedCreteria = show;
  }

  setSelected(id: number) {
    this.selectedCriteriyaId = id;
  }

  constructor(public activeModal: NgbActiveModal, private teamService: TeamService) { }

  ngOnInit(): void {
    if (this.entryId && this.entryId > 0) {
      this.teamService.getJournalEntry(this.entryId).subscribe(m => { 
        this.entry = m;
        this.criteriesList = this.criteriesList.filter(x=> ! this.entry.criteries.map(x=>x.id).includes(x.id))
       }
      );
    } else {
      this.entry = new JournalEntry();
    }
  }
}