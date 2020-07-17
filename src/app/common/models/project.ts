import { SkillSum } from './skillSum';
import { Skill } from './skill';

export class Project{
    id :number;
    name : string;
    color : string;
    skills: Skill[]=[];
}