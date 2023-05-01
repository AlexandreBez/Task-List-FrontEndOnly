import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  isLoading = false;
  isCreated = false;
  isLoginMode = true;
  error = '';

  @ViewChild('loginForm')
  form!: NgForm;

  constructor(private router: Router, private authservice: AuthService) {}

  OnSubmit() {
    this.isLoading = true;
    const email = this.form.value.email;
    const password = this.form.value.password;

    if (!this.form.valid) {
      alert('Please try again....');
    }

    if (this.isLoginMode) {
      this.authservice.login(email, password).subscribe(
        (responseData) => {
          console.log(responseData);
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);

          this.router.navigate(['Home']);

        },
        (errorRes) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);

          setTimeout(() => {
            this.isCreated = false;
          }, 2000);

          this.error = errorRes;

          setTimeout(() => {
            this.error = '';
          }, 3000);
        }
      );

    } else {

      this.authservice.signUp(email, password).subscribe(
        (responseData) => {
          console.log(responseData);
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          setTimeout(() => {
            this.isCreated = true;
          }, 2000);
        },
        (errorRes) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);

          setTimeout(() => {
            this.isCreated = false;
          }, 2000);

          this.error = errorRes;

          setTimeout(() => {
            this.error = '';
          }, 3000);
        }

      );

      this.isCreated = false;
    }

    this.form.reset();
  }

  OnSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
