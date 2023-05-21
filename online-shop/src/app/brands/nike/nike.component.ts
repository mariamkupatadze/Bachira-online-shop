import { Component } from '@angular/core';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.scss']
})
export class NikeComponent {

  ProductsArray : any = [
    {
      img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/823ade39-153e-4ebb-9880-ffaeaf38408b/sportswear-essential-womens-mid-rise-swoosh-leggings-zr61d7.png',
      name: 'Nike Sportswear Essential',
      price: '42',
      gift: false,
      sale: false,
      
    },
    {
      img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bb9d6c67-fdf8-405c-aea7-4ee49846840c/sportswear-phoenix-fleece-womens-over-oversized-crewneck-sweatshirt-Wj2Rd6.png',
      name: 'Nike Sportswear Phoenix Fleece',
      price: '80',
      gift: false,
      sale: true,
    },
    {
      img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0efe9941-18e2-4b74-9f99-e6cdb62ea1ca/swoosh-womens-medium-support-padded-sports-bra-tank-zBG6nl.png',
      name: 'Nike Swoosh',
      price: '150',
      gift: false,
      sale: true,
      
    },
    {
      img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aebcf7aa-b2a2-4810-a500-6fcda48d07aa/sportswear-womens-high-waisted-ribbed-jersey-skirt-BBqLDm.png',
      name: 'Nike Sportswear',
      price: '52',
      gift: true,
      sale: false,
    }
   
  ]
}
