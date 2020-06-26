import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerSkillComponent } from './worker-skill.component';

describe('WorkerSkillComponent', () => {
  let component: WorkerSkillComponent;
  let fixture: ComponentFixture<WorkerSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
