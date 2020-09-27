import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Member } from '../models/member';
import { Message } from '../models/message';
import { Project } from '../models/project';
import { Role } from '../models/role';
import { Skill } from '../models/skill';
import { SkillSum } from '../models/skillSum';

@Injectable({
  providedIn: 'root',
})

export class TeamService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getTeamAll(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url + 'team')
  }

  GetMemberById(id: number): Observable<Member> {
    return this.http.get<Member>(this.url + 'team/' + id)
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.url + 'messages')
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url + 'projects')
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.url + 'roles')
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + 'skills')
  }

}