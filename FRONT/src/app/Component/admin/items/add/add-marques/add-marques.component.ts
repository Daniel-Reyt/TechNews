import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-marques',
  templateUrl: './add-marques.component.html',
  styleUrls: ['./add-marques.component.css'],
})
export class AddMarquesComponent implements OnInit {
  AddMarqueForm: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddMarquesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.AddMarqueForm = this.fb.group({
      nom: '',
      date_creation: '',
    });
  }
  CloseAndReturnData() {
    this.dialogRef.close({
      nom: this.AddMarqueForm.controls.nom.value,
      date_creation: this.AddMarqueForm.controls.date_creation.value,
    });
  }
  closeDialog() {
    this.dialogRef.close(null);
  }
}
