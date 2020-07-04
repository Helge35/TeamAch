import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { TeamService } from './common/services/team.service';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MatrixComponent } from './matrix/matrix.component';
import { WorkerSkillComponent } from './worker-skill/worker-skill.component';
import { ProjectsComponent } from './projects/projects.component';
@NgModule({
  declarations: [
    AppComponent,
    TeamViewComponent,
    TeamDetailsComponent,
    MenuBarComponent,
    MatrixComponent,
    WorkerSkillComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
