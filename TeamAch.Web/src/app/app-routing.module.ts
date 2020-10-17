import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { TeamViewComponent } from './team-view/team-view.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { MatrixComponent } from './matrix/matrix.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path: "", redirectTo: "/team", pathMatch: "full" },
  { path: "team", component: TeamViewComponent },
  { path: "details", component: TeamDetailsComponent },
  { path: "details/:id", component: TeamDetailsComponent },
  { path: "matrix", component: MatrixComponent },
  { path: "projects", component: ProjectsComponent },
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
