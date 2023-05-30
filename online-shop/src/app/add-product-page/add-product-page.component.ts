import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {

  categories: string[] = [
    "Shoes",
    "Bags",
    "T-shirt",
    "Trousers"
  ]
  successText: string;
  errorText: string;
  
  reactiveForm: FormGroup;

  constructor(private _reactForm: FormBuilder, private _http: HttpClient, private _dialogRef: MatDialogRef<AddProductPageComponent>, private firebaseService: FirebaseService) {
   

  }

  ngOnInit() {
    this.initializeForm();
    this.reactiveForm.valueChanges.subscribe((value) => {
      console.log(value)
      this.successText = '';
      this.errorText = '';
    })
  }

  initializeForm() {
    this.reactiveForm = this._reactForm.group({
      brand: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
  }

  onFormSubmit() {
    if (this.reactiveForm.valid) {
      const params = { ...this.reactiveForm.value, email : this.firebaseService.getUser()?.email}
      this._http.post("https://online-shop-b9ca5-default-rtdb.europe-west1.firebasedatabase.app/products.json", params)
        .subscribe((response) => {
          this.errorText = '';
          this.successText = 'Product successfully added!'
          this.reactiveForm.reset({}, { emitEvent: false});
        }, (error) => {
          this.successText = '';
          this.errorText = 'Error! Product not added!'
        })
    }
   }
}
