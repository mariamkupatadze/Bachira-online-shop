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
      name: 'GUCCI midi dress'
    },

    {
      img: 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1676314000/747763_XJFIR_1000_002_100_0000_Light-Ribbed-jersey-dress-with-cut-out-detail.jpg',
      name: 'GUCCI Ribbed jersey dress'
    },

    {
      img: 'https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1674671523/731333_ZHS04_5988_001_100_0000_Light-Silk-georgette-dress.jpg',
      name: 'GUCCI silk georgette dress'
    },

    {
    img: 'https://media.gucci.com/style/HEXA7C3D9_Center_0_0_800x800/1652981484/691657_Z8A0D_1902_002_100_0000_Light-Cotton-poplin-long-dress.jpg',
    name: 'GUCCI Cotton poplin long dress'
    },

    {
      img: 'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1681840827/748497_XJFNY_9791_002_100_0000_Light-Cotton-jersey-playsuit-with-embroidery.jpg',
      name: 'GUCCI COTTON JERSEY PLAYSUIT '
    },

    {
    img: 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679101303/737558_ZAC59_1000_002_100_0000_Light-Silk-maxi-dress.jpg',
    name: 'GUCCISILK MAXI DRESS'
    }
  ]
}
