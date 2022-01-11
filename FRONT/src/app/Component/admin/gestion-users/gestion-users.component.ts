import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { MarquesService } from 'src/app/Services/marques.service';
import { NewsService } from 'src/app/Services/news.service';
import { ProduitService } from 'src/app/Services/produit.service';
import { TypeProduitService } from 'src/app/Services/type-produit.service';
import { UserService } from 'src/app/Services/user.service';
import { AddMarquesComponent } from '../items/add/add-marques/add-marques.component';
import { AddNewsComponent } from '../items/add/add-news/add-news.component';
import { AddProduitComponent } from '../items/add/add-produit/add-produit.component';
import { AddTypeProduitComponent } from '../items/add/add-type-produit/add-type-produit.component';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css'],
})
export class GestionUsersComponent implements OnInit {
  users: any;
  news: any;
  marques: any;
  produits: any;
  type_produits: any;
  connected_user: any;
  constructor(
    private UserService: UserService,
    private MarqueService: MarquesService,
    private ProduitService: ProduitService,
    private NewsService: NewsService,
    private TypeProduitsService: TypeProduitService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.connected_user = localStorage.getItem('id_user');
    this.UserService.getUsers().subscribe((res: any) => {
      this.users = res;
      for (let i = 0; i < this.users.length; i++) {
        switch (this.users[i].role) {
          case 0:
            this.users[i].role = 'Utilisateur';
            break;
          case 1:
            this.users[i].role = 'Modérateur Chat';
            break;
          case 2:
            this.users[i].role = 'Administrateur';
            break;
        }
      }
    });
    this.NewsService.getAllNews().subscribe((res) => {
      this.news = res
    })
    this.MarqueService.getMarques().subscribe((res: any) => {
      this.marques = res;
    });
    this.ProduitService.getProduits().subscribe((res: any) => {
      this.produits = res
    });
    this.TypeProduitsService.getTypeProduits().subscribe((res: any) => {
      this.type_produits = res
    });
  }
  OpenAddNews() {
    let dialogRef = this.dialog
      .open(AddNewsComponent, {
        width: '600px',
        disableClose: true,
        panelClass: 'custom-dialog-container',
      })
      .afterClosed()
      .subscribe((res) => {
        let News = {
          author: this.connected_user,
          date: new Date(),
          message: res,
        };
        this.NewsService.addNews(News).subscribe((res: any) => {
          console.log(res);
        })
        this.NewsService.getAllNews().subscribe((res) => {
          this.news = res
        })
      });
  }
  OpenAddMarque() {
    let dialogRef = this.dialog
      .open(AddMarquesComponent, {
        width: '600px',
        disableClose: true,
        panelClass: 'custom-dialog-container',
      })
      .afterClosed()
      .subscribe((marque) => {
        this.MarqueService.addMarque(marque).subscribe((res) => {
          console.log(res);
        });
        this.MarqueService.getMarques().subscribe((res) => {
          this.marques = res;
        });
      });
  }
  OpenAddProduit() {
    let dialogRef = this.dialog
      .open(AddProduitComponent, {
        width: '600px',
        disableClose: true,
        panelClass: 'custom-dialog-container',
      })
      .afterClosed()
      .subscribe((produit) => {
        this.ProduitService.addProduit(produit).subscribe((res: any) => {
          console.log(res);
        });
        this.ProduitService.getProduits().subscribe((res: any) => {
          this.produits = res
        })
      }
    );
  }
  OpenAddTypeProduit() {
    let dialogRef = this.dialog
      .open(AddTypeProduitComponent, {
        width: '600px',
        disableClose: true,
        panelClass: 'custom-dialog-container',
      })
      .afterClosed()
      .subscribe((type_produit) => {
        this.TypeProduitsService.addTypeProduit(type_produit).subscribe((res: any) => {
          console.log(res);
        });
        this.TypeProduitsService.getTypeProduits().subscribe((res: any) => {
          this.type_produits = res
        });
      });
  }
}
