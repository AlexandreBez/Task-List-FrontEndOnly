import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListUpdateComponent } from 'src/app/task-list/task-list-update/task-list-update.component';

import { CreationTaskComponent } from '../../creation-task/creation-task.component';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';
import { RecoverPasswordComponent } from '../../recover-password/recover-password.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { SettingsComponent } from '../../user/settings/settings.component';

const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },

  {
    path: 'Login',
    component: LoginComponent,
  },

  {
    path: 'RecoverPassword',
    component: RecoverPasswordComponent
  },

  {
    path: 'Home',
    component: HomeComponent,
  },

  {
    path: 'CreateTask',
    component: CreationTaskComponent,
  },

  {
    path: 'MyTasks',
    component: TaskListComponent,
  },

  {
    path: 'UpdateTask/:id',
    component: TaskListUpdateComponent
  },

  {
    path: 'Settings',
    component: SettingsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
