import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';


import { TeamService } from '../common/services/team.service';
import { Member } from '../common/models/member';
import { Message } from '../common/models/message';
import { Project } from '../common/models/project';


@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {

  team: Member[] = [];
  messagesList: Message[];
  projectList: Project[];
  projectsListsIds: string[] = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let sendedItem = event.previousContainer.data[event.previousIndex];
      let dublicateItem = event.container.data.find(it => it.id == sendedItem.id);
      if (dublicateItem == null) {
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
  }

  setProjectListId(projectId) {
    this.projectsListsIds.push('cdk-drop-list-' + projectId);
    return projectId;
  }


  constructor(private _teamService: TeamService) {
  }

  ngOnInit(): void {

    this._teamService.getTeamAll().subscribe(t => this.team = t);
    this._teamService.getProjects().subscribe(p => this.projectList = p);
    this._teamService.getMessages().subscribe(r => this.messagesList = r);
  }
}
