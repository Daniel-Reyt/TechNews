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
import {MatDialogModule} from '@angular/material/dialog';

import { MatFormFieldModule } from "node_modules/@angular/material/form-field";
import { MatSelectModule } from "node_modules/@angular/material/select";
import { MatTabsModule } from "node_modules/@angular/material/tabs";
import { MatToolbarModule } from "node_modules/@angular/material/toolbar";
import { MatIconModule } from "node_modules/@angular/material/icon";
import { ListNewsComponent } from './Component/list-news/list-news.component';
import { ViewCommentComponent } from './Component/view-comment/view-comment.component';
import { AddNewsComponent } from './Component/admin/items/add/add-news/add-news.component';
import { AddMarquesComponent } from './Component/admin/items/add/add-marques/add-marques.component';
import { AddProduitComponent } from './Component/admin/items/add/add-produit/add-produit.component';
import { AddTypeProduitComponent } from './Component/admin/items/add/add-type-produit/add-type-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GestionUsersComponent,
    HomeComponent,
    NavbarComponent,
    ChatComponent,
    ListNewsComponent,
    ViewCommentComponent,
    AddNewsComponent,
    AddMarquesComponent,
    AddProduitComponent,
    AddTypeProduitComponent
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
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
