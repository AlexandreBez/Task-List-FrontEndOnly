import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  OnRecoverPassword(){
    
  }

  backToLogin(){
    this.router.navigate(['Login']);
  }
}
