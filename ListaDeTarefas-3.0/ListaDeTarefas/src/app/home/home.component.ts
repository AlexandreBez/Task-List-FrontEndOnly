import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading = false

  constructor() { }

  ngOnInit(){
    this.isLoading = true;

    setTimeout(() => {
        this.isLoading = false;
    }, 1000);
  }

}
