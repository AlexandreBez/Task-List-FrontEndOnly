import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Task } from '../models/task.model';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService implements OnInit {
  ngOnInit() {
    this.reloadTasks();
  }

  constructor(
    private http: HttpClient,
    private taskService: TaskService,
    private authService: AuthService
  ) {}

  storeTask() {
    const tasks = this.taskService.getTasks();
    let token = this.authService.token;

    return this.http
      .put(
        'https://pocket-task-company-default-rtdb.firebaseio.com/task.json?auth=' + token,
        tasks
      )
      .subscribe((response) => {
        console.log('OK');
      });
  }

  reloadTasks() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {

        let token = this.authService.token;

        return this.http.get<Task[]>(
          'https://pocket-task-company-default-rtdb.firebaseio.com/task.json?auth=' + token
        );
      }),
      tap(
        tasks => {
          this.taskService.setTasks(tasks);
        }
      )
    );
  }

  deleteAllTasks() {
    return this.http.delete<Task>(
      'https://pocket-task-company-default-rtdb.firebaseio.com/task.json'
    );
  }
}
