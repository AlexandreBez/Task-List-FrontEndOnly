import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/routes/AppRouting.module';
import { LoginComponent } from './login/login.component';
import { LoadingSpinnerComponent } from './shared/animations/loading.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListUpdateComponent } from './task-list/task-list-update/task-list-update.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/header/navbar.component';
import { SettingsComponent } from './user/settings/settings.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { HomeComponent } from './home/home.component';
import { CreationTaskComponent } from './creation-task/creation-task.component';
import { TaskService } from './shared/services/task.service';
import { BorderTaskDirective } from './shared/directives/border-task.directive';
import { UnderlienTaskDirective } from './shared/directives/underline-task.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    TaskListComponent,
    TaskListUpdateComponent,
    SettingsComponent,
    RecoverPasswordComponent,
    HomeComponent,
    CreationTaskComponent,
    BorderTaskDirective,
    UnderlienTaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
