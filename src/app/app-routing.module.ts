import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TeamViewComponent} from './team-view/team-view.component';
import {TeamDetailsComponent} from './team-details/team-details.component';
import { MatrixComponent } from './matrix/matrix.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path: "", redirectTo: "/matrix", pathMatch: "full" },
  { path: "team", component: TeamViewComponent },
  { path: "details", component: TeamDetailsComponent },
  { path: "details/:id", component: TeamDetailsComponent },
  { path: "matrix", component: MatrixComponent },
  { path: "projects", component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
