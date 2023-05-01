import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  task = "";
  errorMsg = false;

  priority = '';

  // TO DO
  low: boolean = false;
  high: boolean = false;

  taskDesc: any = [];

  constructor() {
    this.priority = Math.random() >= 0.5 ? 'low' : 'high';
  }

  ngOnInit(): void {
  }

  removeTask(){
    this.taskDesc.pop();
  }

  createTask(){
    if(this.task === ""){
      this.errorMsg = true;
    }else{
      this.errorMsg = false;
      this.taskDesc.push(this.task);
      this.task = "";
    }
  }
}
