import { Role } from './role';
import { WorkerSkill } from './workerSkill';

export class Member{
    id :number;
    name : string;
    email: string;
    role:Role;
    managerId: number;
    skills:WorkerSkill[];
}