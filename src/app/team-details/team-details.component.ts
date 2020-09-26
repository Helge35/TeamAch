import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Member } from '../common/models/member';
import { TeamService } from '../common/services/team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  member: Member = new Member();
  id: number;

  constructor(private route: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = +params['id']; });
    if (this.id) {
      this.teamService.GetMemberById(this.id).subscribe(m => this.member = m);
    } else {
      this.member = new Member();
    }
  }

}
