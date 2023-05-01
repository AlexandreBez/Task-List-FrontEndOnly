import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy{

  private userSub!: Subscription;

  isAuthenticated = false;
  isLoading = false;

  constructor(
    private router: Router,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {

    if(this.isAuthenticated === false){
      this.router.navigate(['Login']);
    }

    this.userSub = this.authService.user.subscribe(
      user => { 
        this.isAuthenticated = !!user;
      }
    )
  }

  OnLogout(){
    this.isAuthenticated = false;
    this.authService.logout();
  }

  reloadTasks(){
    this.isLoading = true;
    setTimeout(
      () => {
        this.isLoading = false;
        this.dataStorageService.reloadTasks();
      }, 1000
    )
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
