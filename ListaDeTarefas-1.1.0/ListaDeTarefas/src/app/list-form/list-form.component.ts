import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  task: string = "";

  low: boolean = false;
  high: boolean = false;

  errorMsg: boolean = false;

  listOfTasks: Task[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  closeErrorMsg(){
    this.errorMsg = false;
  }

  removeTask(){
  }

  createTask(){
    if(this.task === ""){
        this.errorMsg = true;
    }else{
    }
  }
}
