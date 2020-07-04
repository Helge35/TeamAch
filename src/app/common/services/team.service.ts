import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Member } from '../models/member';
import { Message } from '../models/message';
import { Project } from '../models/project';
import { Role } from '../models/role';
import { Skill } from '../models/skill';

@Injectable()
export class TeamService {
    team: Member[] = [
        { id: 1, name: "Tomer", email: "tomer@email.com", role:{id : 1, name:"Junior",shortName:"Jun", color:'#96FFF9'}, managerId:4, skills:[{skillId:1, levelId:1}]},
        { id: 2, name: "Nikolas", email: "nikolas@email.com", role:{id : 2, name:"Midl", shortName:"M", color:'#B7CDFF'}, managerId:0, skills:[{skillId:2, levelId:2}]},
        { id: 3, name: "Ted", email: "ted@email.com" , role:{id : 1, name:"Junior", shortName:"Jun", color:'#96FFF9'} , managerId:4, skills:[{skillId:3, levelId:3}]},
        { id: 4, name: "Yaniv", email: "yaniv@email.com" , role:{id : 3, name:"Senior", shortName:"Sen", color:'#1E9FA1'}, managerId:0, skills:[{skillId:1, levelId:1}, {skillId:2, levelId:2}]},
        { id: 5, name: "Vasili", email: "vasia@email.com", role:{id : 0, name:"Unknown", shortName:"", color:'#F7FDFF'}, managerId:2, skills:[{skillId:1, levelId:1}, {skillId:3, levelId:3}]},
       /* { id: 6, name: "Tomer", email: "tomer@email.com", role:{id : 1, name:"Junior", color:'#96FFF9'}, managerId:4, skills:[{skillId:1, levelId:1}]},
        { id: 7, name: "Nikolas", email: "nikolas@email.com", role:{id : 2, name:"Midl", color:'#B7CDFF'}, managerId:0, skills:[{skillId:2, levelId:2}]},
        { id: 8, name: "Ted", email: "ted@email.com" , role:{id : 1, name:"Junior", color:'#96FFF9'} , managerId:4, skills:[{skillId:3, levelId:3}]},
        { id: 9, name: "Yaniv", email: "yaniv@email.com" , role:{id : 3, name:"Senior", color:'#1E9FA1'}, managerId:0, skills:[{skillId:1, levelId:1}, {skillId:2, levelId:2}]},
        { id: 10, name: "Vasili", email: "vasia@email.com", role:{id : 0, name:"Unknown", color:'#F7FDFF'}, managerId:2, skills:[{skillId:1, levelId:1}, {skillId:3, levelId:3}]},
        { id: 11, name: "Tomer", email: "tomer@email.com", role:{id : 1, name:"Junior", color:'#96FFF9'}, managerId:4, skills:[{skillId:1, levelId:1}]},
        { id: 12, name: "Nikolas", email: "nikolas@email.com", role:{id : 2, name:"Midl", color:'#B7CDFF'}, managerId:0, skills:[{skillId:2, levelId:2}]},
        { id: 13, name: "Ted", email: "ted@email.com" , role:{id : 1, name:"Junior", color:'#96FFF9'} , managerId:4, skills:[{skillId:3, levelId:3}]},
        { id: 14, name: "Yaniv", email: "yaniv@email.com" , role:{id : 3, name:"Senior", color:'#1E9FA1'}, managerId:0, skills:[{skillId:1, levelId:1}, {skillId:2, levelId:2}]},
        { id: 15, name: "Vasili", email: "vasia@email.com", role:{id : 0, name:"Unknown", color:'#F7FDFF'}, managerId:2, skills:[{skillId:1, levelId:1}, {skillId:3, levelId:3}]},
 */
  
    ];

    messages:Message[] =[
        {id : 1, title:"ttile1", text:'text'},
        {id : 1, title:"ttile2", text:'text'},
        {id : 1, title:"ttile3", text:'text'},
        {id : 1, title:"ttile1", text:'text'},
        {id : 1, title:"ttile2", text:'text'},
        {id : 1, title:"ttile3", text:'text'},
        {id : 1, title:"ttile1", text:'text'},
        {id : 1, title:"ttile2", text:'text'},

    ]

    projects:Project[] =[
        {id : 1, name:"First", color:'green' ,neededRoles:[{roleId:1,roleName:'Junior', count:2}]},
        {id : 2, name:"Second", color:'red',neededRoles:[{roleId:1,roleName:'Junior', count:2}]},
        {id : 3, name:"Project 3", color:'yellow',neededRoles:[{roleId:1,roleName:'Junior', count:2}, {roleId:3,roleName:'Senior', count:1}]},
        {id : 4, name:"Project 4" , color:'aqua',neededRoles:[{roleId:1,roleName:'Junior', count:2}]},
        {id : 5, name:"Project 5", color:'gray', neededRoles:[]},
        {id : 6, name:"Project 6", color:'silver', neededRoles:[]},
        {id : 7, name:"Project 7", color:'gold' ,neededRoles:[]},
        {id : 8, name:"Project 8", color:'black', neededRoles:[]},
    ]

    roles:Role[] =[
        {id : 0, name:"", shortName:"", color:'#F7FDFF'},
        {id : 1, name:"Junior",shortName:"Jun", color:'#96FFF9'},
        {id : 2, name:"Midl", shortName:"M",color:'#B7CDFF'},
        {id : 3, name:"Senior", shortName:"Sen",color:'#1E9FA1'},
        {id : 4, name:"TeamLead",shortName:"TL", color:'#A06B98'},
    ]

    skills:Skill[] = [
        {id : 1, name:"C#", isHard:true, sum:[]},
        {id : 2, name:"Sql", isHard:true, sum:[]},
        {id : 3, name:"C++", isHard:true, sum:[]},
        {id : 4, name:"WPF", isHard:true, sum:[]},
        {id : 5, name:"C#", isHard:true, sum:[]},
        {id : 6, name:"Sql", isHard:true, sum:[]},
        {id : 7, name:"C++", isHard:true, sum:[]},
        {id : 8, name:"WPF", isHard:true, sum:[]},
        {id : 9, name:"C#", isHard:true, sum:[]},
        {id : 10, name:"Sql", isHard:true, sum:[]},
        {id : 11, name:"C++", isHard:true, sum:[]},
        {id : 12, name:"WPF", isHard:true, sum:[]},
        {id : 13, name:"C#", isHard:true, sum:[]},
        {id : 14, name:"Sql", isHard:true, sum:[]},
        {id : 15, name:"C++", isHard:true, sum:[]},
        {id : 16, name:"WPF", isHard:true, sum:[]},
        {id : 17, name:"Sql", isHard:true, sum:[]},
       /* {id : 16, name:"C++", isHard:true, sum:[]},
        {id : 19, name:"WPF", isHard:true, sum:[]},
        {id : 20, name:"Sql", isHard:true, sum:[]},
        {id : 21, name:"C++", isHard:true, sum:[]},
        {id : 22, name:"WPF", isHard:true, sum:[]},*/
        {id : 23, name:"Tiime Mng.", isHard:false, sum:[]},
        {id : 24, name:"Team Work", isHard:false, sum:[]},
        {id : 25, name:"Tiime Mng.", isHard:false, sum:[]},
        {id : 26, name:"Team Work", isHard:false, sum:[]},
        {id : 27, name:"Tiime Mng.", isHard:false, sum:[]},
        {id : 28, name:"Team Work", isHard:false, sum:[]},
        {id : 29, name:"Tiime Mng.", isHard:false, sum:[]},
        {id : 30, name:"Team Work", isHard:false, sum:[]},
        {id : 31, name:"Tiime Mng.", isHard:false, sum:[]},
        {id : 32, name:"Team Work", isHard:false, sum:[]},


    ]
}