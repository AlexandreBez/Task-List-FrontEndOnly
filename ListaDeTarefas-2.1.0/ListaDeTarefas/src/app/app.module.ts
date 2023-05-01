import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreationTaskComponent } from './creation-task/creation-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { BorderTaskDirective } from './shared/border-task.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreationTaskComponent,
    TaskListComponent,
    BorderTaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
