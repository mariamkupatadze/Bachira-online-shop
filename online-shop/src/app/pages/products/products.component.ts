import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { product } from '../../models/product';
import { map } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products: product[];
  productsArray: any = []; 
 
  constructor(public firebaseService: FirebaseService, private _dialog: MatDialog, private _http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getUser() {
    return  this.firebaseService.getUser()?.email;
   }

 productOwner(product) {
    return this.getUser() && (this.getUser() === 'admin@mail.ru' || this.getUser() === product?.email)

 }

  getProducts() {
    this._http.get<{[key: string]: product}>("https://online-shop-b9ca5-default-rtdb.europe-west1.firebasedatabase.app/products.json")
              .pipe(map((res) => {
                const products = [];
                for(const key in res) {
                  let product: product = {
                    brand: res[key].brand,
                    name: res[key].name,
                    price: res[key].price,
                    size: res[key].size,
                    image: res[key].image,
                    category: res[key].category,
                    email: res[key].email,
                    id : key
                  }
                  
                  products.push(product)
                }
                return products;

              })).subscribe((res) => {
                this.productsArray = res;
              })
  }

  deleteProduct(key: string) {
    this._http.delete(`https://online-shop-b9ca5-default-rtdb.europe-west1.firebasedatabase.app/products/${key}.json`)
              .subscribe(() => {
                this.getProducts();
              })
  }
}
