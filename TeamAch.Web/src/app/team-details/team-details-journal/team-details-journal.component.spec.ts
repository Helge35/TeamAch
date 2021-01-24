import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsJournalComponent } from './team-details-journal.component';

describe('TeamDetailsJournalComponent', () => {
  let component: TeamDetailsJournalComponent;
  let fixture: ComponentFixture<TeamDetailsJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDetailsJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailsJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
