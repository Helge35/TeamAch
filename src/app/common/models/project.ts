import { SkillSum } from './skillSum';
import { Skill } from './skill';
import { Member } from './member';

export class Project {
    id: number;
    name: string;
    color: string;
    skills: Skill[] = [];
    team: Member[] = [];
}