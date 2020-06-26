import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Member } from '../common/models/member';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  member: Member;
  id: number;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = +params['id']; });
    
    /*if (this.id) {
      
    } else {
      this.member = new Member();
    }*/
  }

}
