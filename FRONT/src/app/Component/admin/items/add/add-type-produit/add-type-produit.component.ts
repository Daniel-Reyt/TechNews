import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-type-produit',
  templateUrl: './add-type-produit.component.html',
  styleUrls: ['./add-type-produit.component.css']
})
export class AddTypeProduitComponent implements OnInit {
  AddTypeProduitForm: any
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddTypeProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.AddTypeProduitForm = this.fb.group({
      nom: ''
    })
  }
  AddAndClose() {
    this.dialogRef.close({nom: this.AddTypeProduitForm.controls.nom.value})
  }
  closeDialog() {
    this.dialogRef.close(null)
  }
}
