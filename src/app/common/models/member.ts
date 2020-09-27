import { Role } from './role';
import { WorkerSkill } from './workerSkill';
import { Project } from './project';
export class Member{
    id :number;
    name : string;
    email: string;
    iconPath:string;
    role:Role;
    birthday: Date;
    managerId: number;
    skills:WorkerSkill[];
    projects: Project[];
    status: string;
}