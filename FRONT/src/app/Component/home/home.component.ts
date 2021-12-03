import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: any;
  mail: any;
  role: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.mail = localStorage.getItem('mail');
    this.role = localStorage.getItem('role');
    console.log(this.username);
  }
}
