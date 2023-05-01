export class Task{

    public task: string;
    public type: string;
    public date: string;

    constructor(task: string, type: string, date: string){
        this.task = task;
        this.type = type;
        this.date = date;
    }
}