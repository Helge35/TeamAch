import { Role } from './role';
import { WorkerSkill } from './workerSkill';
import { Project } from './project';
import { Absence } from 'src/app/common/models/absence';
export class Member{
    id :number;
    name : string;
    email: string;
    phone: string;
    iconPath:string;
    role:Role;
    birthday: Date;
    managerId: number;
    skills:WorkerSkill[];
    projects: Project[];
    absences : Absence[];
    status: string;
}