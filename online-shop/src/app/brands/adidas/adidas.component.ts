import { Component } from '@angular/core';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.scss']
})
export class AdidasComponent {
ProductsArray : any = [
    {
      img: 'https://i8.amplience.net/i/jpl/sz_592737_b?qlt=92&w=750&h=580&v=1&fmt=auto',
      name: 'adidas Originals Superstar 82',
      price: '110',
      sale: true
      
    },
    {
      img: 'https://i8.amplience.net/i/jpl/sz_619045_b?qlt=92&w=750&h=580&v=1&fmt=auto',
      name: 'adidas Originals Centennial 85 Low',
      price: '90',
      sale: true
    },
    {
      img: 'https://i8.amplience.net/i/jpl/sz_615165_a?qlt=92&w=750&h=580&v=1&fmt=auto',
      name: 'adidas Originals Superstar 82',
      price: '110',
      sale: true
      
    },
    {
      img: 'https://i8.amplience.net/i/jpl/sz_619040_c?qlt=92&w=750&h=580&v=1&fmt=auto',
      name: 'adidas Originals Centennial 85 Low',
      price: '90',
      sale: false
    },
    {
      img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c10fcd90c433455e8f79ad0800cb4469_9366/NMD_R1_Primeblue_Shoes_Black_GZ9257_01_standard.jpg',
      name: 'Adidas',
      price: '400',
      sale: false
    },
    {
      img: 'https://adjarastoremedia.s3.amazonaws.com/media/product/193105903410-2.jpeg',
      name: 'Adidas',
      price: '200',  
      sale: true
    }
  ]
}
