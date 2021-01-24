import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsGeneralComponent } from './team-details-general.component';

describe('TeamDetailsGeneralComponent', () => {
  let component: TeamDetailsGeneralComponent;
  let fixture: ComponentFixture<TeamDetailsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDetailsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
