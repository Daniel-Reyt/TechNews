import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;

  users: any;

  constructor(private fb: FormBuilder,
    private userSevice: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();

    this.LoginForm = this.fb.group({
      username: '',
      password: ''
    })
  }

  getUsers() {
    this.userSevice.getUsers().subscribe((res: any) => {
      this.users = res;
    })
  }

  Login() {
    const username = this.LoginForm.controls['username'].value;
    const password = this.LoginForm.controls['password'].value;

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username && this.users[i].password === password) {
        localStorage.setItem('username', this.users[i].username)        
        localStorage.setItem('id_user', this.users[i].id_user)
        localStorage.setItem('mail', this.users[i].mail_user)
        localStorage.setItem('role', this.users[i].role)
        this.router.navigate(['home'])
      }
    }
  }
}
