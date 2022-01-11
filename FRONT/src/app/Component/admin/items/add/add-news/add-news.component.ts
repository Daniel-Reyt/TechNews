import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  AddNewsForm: any
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.AddNewsForm = this.fb.group({
      message: ''
    })
  }

  AddAndClose() {
    this.dialogRef.close(this.AddNewsForm.controls.message.value)
  }
  closeDialog() {
    this.dialogRef.close(null)
  }
}
