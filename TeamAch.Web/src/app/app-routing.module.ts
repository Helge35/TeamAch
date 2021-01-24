import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { TeamViewComponent } from './team-view/team-view.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { MatrixComponent } from './matrix/matrix.component';
import { ProjectsComponent } from './projects/projects.component';
import {GateComponent} from './gate/gate.component';
import { AuthGuard } from './common/guards/auth-guard';


const routes: Routes = [
  { path: "", component: GateComponent },
  { path: "home", component: GateComponent },
  { path: "team", component: TeamViewComponent, canActivate:[AuthGuard] },
  { path: "details", component: TeamDetailsComponent, canActivate:[AuthGuard] },
  { path: "details/:id", component: TeamDetailsComponent , canActivate:[AuthGuard]},
  { path: "matrix", component: MatrixComponent , canActivate:[AuthGuard]},
  { path: "projects", component: ProjectsComponent , canActivate:[AuthGuard]},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
