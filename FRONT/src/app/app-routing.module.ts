import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { HomeComponent } from './Component/home/home.component';
import { GestionUsersComponent } from './Component/admin/gestion-users/gestion-users.component';
import { ChatComponent } from './Component/chat/chat.component';
import { ListNewsComponent } from './Component/list-news/list-news.component';
import { ViewCommentComponent } from './Component/view-comment/view-comment.component';

const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'gestion-users', component: GestionUsersComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'news', component: ListNewsComponent},
  {path: 'comments/:id_news', component: ViewCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
