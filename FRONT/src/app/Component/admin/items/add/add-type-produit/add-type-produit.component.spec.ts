import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeProduitComponent } from './add-type-produit.component';

describe('AddTypeProduitComponent', () => {
  let component: AddTypeProduitComponent;
  let fixture: ComponentFixture<AddTypeProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
