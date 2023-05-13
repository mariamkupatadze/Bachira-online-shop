import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent {

  categories: string[] = [
    "Shoes",
    "Bags",
    "T-shirt",
    "Trousers"
  ]
  
  reactiveForm: FormGroup;

  constructor(private _reactForm: FormBuilder, private _http: HttpClient, private _dialogRef: MatDialogRef<AddProductPageComponent>) {
    this.reactiveForm = this._reactForm.group({
      brand: '',
      name: '',
      price: '',
      image: '',
      size: '',
      category: ''
    })

  }

  onFormSubmit() {
    if(this.reactiveForm.value) {
     this._http.post("https://online-shop-b9ca5-default-rtdb.europe-west1.firebasedatabase.app/products.json", this.reactiveForm.value)
               .subscribe((response) => {
                 this._dialogRef.close();
                 alert("პროდუცტი წარმატებით დაემატა")
               })
    }
   }


}
