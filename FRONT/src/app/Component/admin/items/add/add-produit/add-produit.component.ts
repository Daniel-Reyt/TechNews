import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MarquesService } from 'src/app/Services/marques.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  SelectMarque: any;
  AddProduitForm: any
  constructor(
    private fb: FormBuilder,
    private MarqueService: MarquesService,
    public dialogRef: MatDialogRef<AddProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.MarqueService.getMarques().subscribe((res) => {
      this.SelectMarque = res
      console.log(res);
    })
    this.AddProduitForm = this.fb.group({
      nom: '',
      description: '',
      prix: '',
      type: '',
      marque: ''
    })
  }
  AddAndClose() {
    this.dialogRef.close({nom: this.AddProduitForm.controls.nom.value, description: this.AddProduitForm.controls.description.value, prix: this.AddProduitForm.controls.prix.value, id_marque: this.AddProduitForm.controls.marque.value})
  }
  closeDialog() {
    this.dialogRef.close(null)
  }
}
