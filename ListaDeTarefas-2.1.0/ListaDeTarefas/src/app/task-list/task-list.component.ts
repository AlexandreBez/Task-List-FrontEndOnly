import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input('taskElement') element!: { type: string, task: string };

  constructor() { }

  ngOnInit(): void {
  }

}
