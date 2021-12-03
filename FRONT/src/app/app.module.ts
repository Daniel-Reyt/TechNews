import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { GestionUsersComponent } from './Component/admin/gestion-users/gestion-users.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ChatComponent } from './Component/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from "node_modules/@angular/material/form-field";
import { MatSelectModule } from "node_modules/@angular/material/select";
import { MatTabsModule } from "node_modules/@angular/material/tabs";
import { MatToolbarModule } from "node_modules/@angular/material/toolbar";
import { MatIconModule } from "node_modules/@angular/material/icon";
import { ListNewsComponent } from './Component/list-news/list-news.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GestionUsersComponent,
    HomeComponent,
    NavbarComponent,
    ChatComponent,
    ListNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
