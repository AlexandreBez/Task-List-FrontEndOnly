import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: any = [];

  confirmDelete = false;
  confirmDeleteAll = false;
  alertDelete = false;

  // ----------------------------------
  
  onYesDelete(){
    this.tasks.pop();
    this.confirmDelete = false;
    setTimeout(() => {
      this.alertDelete = true;

      setTimeout(()=> {
        this.alertDelete = false;
      }, 2000);
      
    }, 500);
  }

  onCancelDelete(){
    this.confirmDelete = false;
  }

  onBtnDelete(){
    this.confirmDelete = true;
  }

  // ---------------------------------

  onYesDeleteAll(){
    this.tasks = [];
    this.confirmDeleteAll = false;
    setTimeout(() => {
      this.alertDelete = true;

      setTimeout(()=> {
        this.alertDelete = false;
      }, 5000);
      
    }, 500);
  }

  onCancelDeleteAll(){
    this.confirmDeleteAll = false;
  }

  onBtnDeleteAll(){
    this.confirmDeleteAll = true;
  }


  // -------------------------------

  // use the emited component from creation task
  onAddedLowTask(taskData: {type: string, task: string}){
    this.tasks.push({
      type: taskData.type,
      task: taskData.task
    });
  }

  onAddedMediumTask(taskData: {type: string, task: string}){
    this.tasks.push({
      type: taskData.type,
      task: taskData.task
    });
  }

  onAddedHighTask(taskData: {type: string, task: string}){
    this.tasks.push({
      type: taskData.type,
      task: taskData.task
    });
  }
}
