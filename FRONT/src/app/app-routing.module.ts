import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { HomeComponent } from './Component/home/home.component';
import { GestionUsersComponent } from './Component/admin/gestion-users/gestion-users.component';
import { ChatComponent } from './Component/chat/chat.component';

const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'gestion-users', component: GestionUsersComponent},
  {path: 'chat', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
