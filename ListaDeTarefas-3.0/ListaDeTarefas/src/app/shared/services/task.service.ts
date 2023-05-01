import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable()
export class TaskService{

  private tasks: Task[] = [];

  starteEditing = new EventEmitter<number>();
  taskChanged = new Subject<Task[]>();

  getTasks() {
    return this.tasks.slice();
  }

  getTask(index: number){
    return this.tasks.slice()[index];
  }

  saveNewTask(taskData: Task) {
    this.tasks.push(taskData);
  }

  onUpdateTask(index: number, updatedTask: Task){
    this.tasks[index] =  updatedTask;
    this.taskChanged.next(this.tasks.slice());
  }

  onDeleteTask(index: number){
    this.tasks?.splice(index, 1);
    this.taskChanged.next(this.tasks.slice());
  }

  onDeleteAll(){
    this.tasks = [];
    
  }

  setTasks(tasksLoaded: Task[]){
    this.tasks = tasksLoaded;
    this.taskChanged.next(this.tasks.slice());
  }
}
