import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {JwtModule} from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { TeamService } from './common/services/team.service';
import { LoginService } from './common/services/login.service';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MatrixComponent } from './matrix/matrix.component';
import { WorkerSkillComponent } from './worker-skill/worker-skill.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { JournalEntryComponent } from './team-details/journal-entry/journal-entry.component';
import { AddMemberComponent } from './team-view/add-member/add-member.component';
import { LoginComponent } from './login/login.component';
import { GateComponent } from './gate/gate.component';
import { TeamDetailsGeneralComponent } from './team-details/team-details-general/team-details-general.component';
import { TeamDetailsJournalComponent } from './team-details/team-details-journal/team-details-journal.component';
import { AuthGuard } from './common/guards/auth-guard';


export function tokenGetter(){
  return localStorage.getItem("jwtTeamAchToken")
}

@NgModule({
  declarations: [
    AppComponent,
    TeamViewComponent,
    TeamDetailsComponent,
    MenuBarComponent,
    MatrixComponent,
    WorkerSkillComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    JournalEntryComponent,
    AddMemberComponent,
    LoginComponent,
    GateComponent,
    TeamDetailsGeneralComponent,
    TeamDetailsJournalComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains:["localhost:64714"],
        blacklistedRoutes:[]
      }
    })
  ],
  providers: [TeamService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

//json-server --watch mock-data.json
