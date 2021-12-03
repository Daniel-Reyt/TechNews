import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {

  users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res
      for (let i = 0; i < this.users.length; i++) {
        switch (this.users[i].role) {
          case 0:
            this.users[i].role = "Utilisateur";
            break;
          case 1:
            this.users[i].role = "Modérateur Chat";
            break;          
          case 2:
            this.users[i].role = "Administrateur";
            break; 
        }
      }
    })
  }

}
