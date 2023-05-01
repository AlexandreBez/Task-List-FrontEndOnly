import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../shared/models/task.model';
import { DataStorageService } from '../shared/services/data-storage.service';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  isLoading = false;

  index?: number;
  tasks?: Task[];
  deleteAll = false;
  deleteTask = false;

  indexToRemove!: number;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.dataStorageService.reloadTasks();
    setTimeout(() => {
      this.isLoading = false;
      this.tasks = this.taskService.getTasks();
    }, 500);
  }

  OnUpdateTask(id: number) {
    this.taskService.starteEditing.next(id);
    this.router.navigate(['/UpdateTask/' + id]);
  }

  OnConfirmRemove(index: number) {
    this.deleteTask = true;
    this.indexToRemove = index;
  }

  onDeleteTask() {
    this.taskService.onDeleteTask(this.indexToRemove);
    this.tasks = this.taskService.getTasks();
    this.deleteTask = false;
    alert('Task deleted with success...');
  }

  OnConfirmDeleteAll() {
    this.deleteAll = true;
  }

  OnDeleteAll() {
    this.deleteAll = false;
    this.taskService.onDeleteAll();
    this.tasks = this.taskService.getTasks();
    alert('All tasks deleted with success...');
  }
}
