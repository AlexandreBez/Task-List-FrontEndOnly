import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/shared/models/task.model';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-list-update',
  templateUrl: './task-list-update.component.html',
  styleUrls: ['./task-list-update.component.css'],
})
export class TaskListUpdateComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  @ViewChild('taskForm')
  taskForm!: NgForm;

  id!: number;
  task?: Task;

  taskIsUpdated = false;
  confirmUpdate = false;

  taskDetail!: string;
  taskType!: string;
  taskdate!: string;

  isloading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.isloading = true;

    this.subscription = this.taskService.starteEditing.subscribe(
      this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.task = this.taskService.getTask(this.id);
        this.taskDetail = this.task.task;
        this.taskType = this.task.type;
        this.taskdate = this.task.date;
      })
    );

    setTimeout(() => {
      this.isloading = false;
    }, 1000);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe;
  }

  onConfirmUpdate() {
    this.confirmUpdate = true;
  }

  onUpdateTask() {
    const newTask = new Task(this.taskDetail, this.taskType, this.taskdate);
    this.taskService.onUpdateTask(this.id, newTask);
    this.taskIsUpdated = true;
    this.confirmUpdate = false;

    setTimeout(() => {
      this.router.navigate(['MyTasks']);
    }, 2000);
  }

  onCancelUpdate() {
    this.router.navigate(['MyTasks']);
  }
}
