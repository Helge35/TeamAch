import { Criteria } from './criteria';

export class JournalEntry{
    id : number;
    taskId: number;
    memberId: number;
    title : string;
    description: string;
    criteries: Criteria[];
}