import { Component } from '@angular/core';

@Component({
  selector: 'app-gucci',
  templateUrl: './gucci.component.html',
  styleUrls: ['./gucci.component.scss']
})
export class GucciComponent {

  productsArray: any = [
    {
      img: 'https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1671474687/732062_ZAMEG_1168_002_100_0000_Light-Equestrian-print-silk-dress.jpg',
      name: 'GUCCI midi dress',
      price: '3000',
      gift: false,
      sale: true,
     },
     {
      img: 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1676314000/747763_XJFIR_1000_002_100_0000_Light-Ribbed-jersey-dress-with-cut-out-detail.jpg',
      name: 'GUCCI Ribbed jersey dress',
      price: '3600',
      gift: true,
      sale: true,
    },
    {
      img: 'https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1674671523/731333_ZHS04_5988_001_100_0000_Light-Silk-georgette-dress.jpg',
      name: 'GUCCI silk georgette dress',
      price: '2900',
      gift: false,
      sale: true,
    },
    {
    img: 'https://media.gucci.com/style/HEXA7C3D9_Center_0_0_800x800/1652981484/691657_Z8A0D_1902_002_100_0000_Light-Cotton-poplin-long-dress.jpg',
    name: 'GUCCI Cotton poplin long dress',
    price: '2150',
    gift: true,
    sale: false,
    }
  ]
}
