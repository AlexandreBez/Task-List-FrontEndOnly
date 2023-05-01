import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../shared/models/task.model';
import { DataStorageService } from '../shared/services/data-storage.service';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-creation-task',
  templateUrl: './creation-task.component.html',
  styleUrls: ['./creation-task.component.css'],
})
export class CreationTaskComponent implements OnInit {
  @ViewChild('taskForm')
  taskForm?: NgForm;

  taskSuccess = false;
  isLoading = false;

  constructor(
    private taskService: TaskService,
    private dataStorageService: DataStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  setDateNow() {
    let day = new Date().getDay().toString();
    if (day.length === 1) {
      day = '0' + day;
    }

    let month = new Date().getMonth().toString();
    if (month.length === 1) {
      month = '0' + month;
    }

    let year = new Date().getDate().toString();

    const fullDate = day + '/' + month + '/' + year;

    return fullDate;
  }

  onAddTask() {
    const task = this.taskForm?.value.task;
    const type = this.taskForm?.value.type;
    const date = this.setDateNow();
    const newTask = new Task(task, type, date);

    this.taskSuccess = true;

    this.taskService.saveNewTask(newTask);

    setTimeout(() => {
      this.dataStorageService.storeTask();
    }, 2000);

    this.router.navigate(['MyTasks']);
  }
}
