import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { product } from '../../models/product';
import { map } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products: product[];

   productsArray: any = []
    
  //   {
  //     img: 'https://i8.amplience.net/t/jpl/sz_product_list?plu=sz_593173_a&qlt=85&qlt=92&w=363&h=281&v=1&fmt=auto&fmt=auto',
  //     name: 'Adidas',
  //     price: '300',
  //     size: '36 37 38 40',
  //     gift: false,
  //     sale: true,
      
  //   },
  //   {
  //     img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c10fcd90c433455e8f79ad0800cb4469_9366/NMD_R1_Primeblue_Shoes_Black_GZ9257_01_standard.jpg',

  //     name: 'Adidas',
  //     price: '400',
  //     size: '36 37 38 40 42',
  //     gift: true,
  //     sale: false,
      
  //   },
  //   {
  //     img: 'https://adjarastoremedia.s3.amazonaws.com/media/product/193105903410-2.jpeg',

  //     name: 'Adidas',
  //     price: '200',
  //     size: '37 38 40 42',
  //     gift: true,
  //     sale: true,
     
  //   },
  //   {
  //     img: 'https://icrshop.ge/assets/local/catalog/thumbnails/aw-lab-adidas-801-1626_1.jpg?v=2.8',
  //     name: 'Adidas Forum Low',
  //     price: '100',
  //     size: '37 38 ',
  //     gift: false,
  //     sale: true,
  //   },
  //   {
  //     img: 'https://i8.amplience.net/i/jpl/sz_618707_a?qlt=92&w=750&h=580&v=1&fmt=auto',

  //     name: 'Adidas',
  //     price: '150',
  //     size: '37 38 42',
  //     gift: true,
     
  //   },
  //   {
  //     img: 'https://i8.amplience.net/i/jpl/sz_619017_b?qlt=92&w=750&h=580&v=1&fmt=auto',
  //     name: 'adidas Originals Forum 84 Low Women',
  //     price: '200',
  //     size: '37 38 ',
  //     gift: false,
  //     sale: false,
      
  //   },
  //   {
  //     img: 'https://i8.amplience.net/i/jpl/sz_618386_a?qlt=92&w=750&h=580&v=1&fmt=auto',

  //     name: 'adidas Originals Rivalry Low 86 Women',
  //     price: '90',
  //     size: '37 38 42',
  //     gift: true,
  //     sale: false,
     
  //   },
  //   {
  //     img: 'https://i8.amplience.net/i/jpl/sz_628256_d?qlt=92&w=750&h=580&v=1&fmt=auto',
  //     name: 'adidas Superstar',
  //     price: '100',
  //     size: '37 38 39 ',
  //     gift: false,
  //     sale: true,
      
  //   }
  // ]

  // menProductsArray : any = [
  //   {
  //     img: 'https://i8.amplience.net/i/jpl/sz_592737_b?qlt=92&w=750&h=580&v=1&fmt=auto',
  //     name: 'adidas Originals Superstar 82',
  //     price: '110',
  //     size: '40 41 42 43',
  //     gift: false,
  //     sale: true,
      
  //   },
  //   {
  //     img: 'https://i8.amplience.net/i/jpl/sz_619045_b?qlt=92&w=750&h=580&v=1&fmt=auto',

  //     name: 'adidas Originals Centennial 85 Low',
  //     price: '90',
  //     size: '40  42 43',
  //     gift: true,
  //     sale: false,
  //   },
  //   {
  //     img: 'https://i8.amplience.net/i/jpl/sz_615165_a?qlt=92&w=750&h=580&v=1&fmt=auto',
  //     name: 'adidas Originals Superstar 82',
  //     price: '110',
  //     size: ' 41 42 43 44',
  //     gift: false,
  //     sale: true,
      
  //   },
  //   {
  //     img: 'https://i8.amplience.net/i/jpl/sz_619040_c?qlt=92&w=750&h=580&v=1&fmt=auto',

  //     name: 'adidas Originals Centennial 85 Low',
  //     price: '90',
  //     size: '40  42 43',
  //     gift: true,
  //     sale: false,
  //   },
  // ]

  // balenciagaBag : any = [
  //   {
  //     img: 'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/231342F048051_1/balenciaga-white-small-le-cagole-shoulder-bag.jpg',
  //     name: 'White small Bag',
  //     price: '2110',
  //     gift: false, 
  //   },
  //   {
  //     img: 'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/231342F048029_1/balenciaga-black-mini-le-cagole-bag.jpg',
  //     name: 'Black mini Bag',
  //     price: '1490',
  //     gift: true,
  //   },
  //   {
  //     img: 'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222342F048095_1/balenciaga-pink-mini-le-cagole-denim-bag.jpg',
  //     name: 'Pink mini Bag',
  //     price: '1340',
  //     gift: false, 
  //   },
  //   {
  //     img: 'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222342F048012_1/balenciaga-white-small-lindsay-shoulder-bag.jpg',
  //     name: 'White small Bag',
  //     price: '1690',
  //     gift: true,
  //   },
  // ]

  constructor(private _dialog: MatDialog, private _http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts() 
  }

  getProducts() {
    this._http.get<{[key: string]: product}>("https://online-shop-b9ca5-default-rtdb.europe-west1.firebasedatabase.app/products.json")
              .pipe(map((res) => {
                const products = [];
                for(const key in res) {
                  let product: product = {
                    brand: res[key].brand,
                    price: res[key].price,
                    size: res[key].size,
                    image: res[key].image,
                    category: res[key].category,
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
                alert('პროდუცტი წარმატებით წაიშალა')
                this.getProducts();
              })
  }


}
