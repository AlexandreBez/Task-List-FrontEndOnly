import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-creation-task',
  templateUrl: './creation-task.component.html',
  styleUrls: ['./creation-task.component.css']
})
export class CreationTaskComponent implements OnInit {

  taskNameInput = "";
  alertSuccess = false;
  alertError = false;

  @Output('low') 
  lowTaskCreated = new EventEmitter<{type: string, task:string}>();
  
  @Output('medium') 
  mediumTaskCreated = new EventEmitter<{type: string, task:string}>();
  
  @Output('high') 
  highTaskCreated = new EventEmitter<{type: string, task:string}>(); 

  constructor() { }

  ngOnInit(): void {
  }
  
  // Junior stuff: yeah I know.. have better way to make this alert of task created but it's worked
  alertSuccessHelper(){

    setTimeout(() => {
      this.alertSuccess = true;

      setTimeout(()=> {
        this.alertSuccess = false;
      }, 5000);
      
    }, 500);

  }
  alertErrorHelper(){

    setTimeout(() => {
      this.alertError = true;

      setTimeout(()=> {
        this.alertError = false;
      }, 5000);
      
    }, 500);

  }

  onAddLowTask(){

    if(this.taskNameInput === ""){
      // call error alert
      this.alertErrorHelper();
    }else{
      
      // call success alert
      this.alertSuccessHelper();
      // send the object with the task
      this.lowTaskCreated.emit({type: "Low", task: this.taskNameInput});
      console.log(this.taskNameInput);    
      this.taskNameInput = "";
    }

  }

  onAddMediumTask(){

    if(this.taskNameInput === ""){
      this.alertErrorHelper();
    }else{
      this.alertSuccessHelper();
      this.mediumTaskCreated.emit({type: "Medium", task: this.taskNameInput});
      console.log(this.taskNameInput);    
      this.taskNameInput = "";
    }

  }

  onAddHighTask(){

    if(this.taskNameInput === ""){
      this.alertErrorHelper();
    }else{
      this.alertSuccessHelper();
      this.highTaskCreated.emit({type: "High", task: this.taskNameInput});
      console.log(this.taskNameInput);    
      this.taskNameInput = "";
    }

  }

}
