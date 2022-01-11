import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selected: String = "Admin"

  class_Home = "nav-link";
  class_News = "nav-link";
  class_Chat = "nav-link";

  is_modo: any;
  is_admin: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let role: any = localStorage.getItem('role')    
    if (role == 2) {
      this.is_modo = true;
      this.is_admin = true;
    } else if (role == 1) {
      this.is_modo = true;
      this.is_admin = false;
    } else if (role == 0) {
      this.is_modo = false;
      this.is_admin = false;
    }
  }

  redirectHome() {
      this.class_Home = "nav-link activedLink"
      this.class_News = "nav-link"
      this.class_Chat = "nav-link"
      this.selected = "Admin"
  }

  redirectNews() {
    this.class_Home = "nav-link"
    this.class_News = "nav-link activedLink"
    this.class_Chat = "nav-link"
    this.selected = "Admin"
  }

  redirectChat() {
    this.class_Home = "nav-link"
    this.class_News = "nav-link"
    this.class_Chat = "nav-link activedLink"
    this.selected = "Admin"
  } 

  LogOut() {
    this.class_Home = "nav-link"
    this.class_News = "nav-link"
    this.class_Chat = "nav-link"
    this.selected = "Admin"

    this.is_admin = false;
    this.is_modo = false

    localStorage.clear();
    this.router.navigate([''])
  }
}
