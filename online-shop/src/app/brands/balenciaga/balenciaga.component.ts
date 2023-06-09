import { Component } from '@angular/core';

@Component({
  selector: 'app-balenciaga',
  templateUrl: './balenciaga.component.html',
  styleUrls: ['./balenciaga.component.scss']
})
export class BalenciagaComponent {

  productsArray: any = [
    {
      img: 'https://balenciaga.dam.kering.com/m/4c4e004c66214616/Large-746701TOS151000_G.jpg?v=1',
      name: 'MAXI SKIRT IN BLACK'
     },

     {
      img: 'https://balenciaga.dam.kering.com/m/62f3ed9a54919f9c/Large-751656TOV101000_G.jpg?v=1',
      name: 'KNIFE PANTALEGGINGS IN BLACK',
      price: '4890',
      sale: true
    },
    
    {
      img: 'https://balenciaga.dam.kering.com/m/38877f39bf047653/Large-746541TOT071240_G.jpg?v=1',
      name: 'KNIFE TAILORED PANTASHOES IN GREY'
     },

     {
      img: 'https://balenciaga.dam.kering.com/m/747250a90189b456/Large-746213TNV491000_G.jpg?v=1',
      name: 'TANK TOP CORSET IN BLACK'
    },

    {
      img: 'https://balenciaga.dam.kering.com/m/74bfda1a51df3295/Large-7486573D2B41081_F.jpg?v=1',
      name: 'WOMEN CRYSTAL MESH MINI DRESS ',
     },

     {
      img: 'https://balenciaga.dam.kering.com/m/4730c1e81c968230/Large-746173TNV436400_G.jpg?v=1',
      name: 'WOMEN PATCHED BIKINI DRESSK'
    }
  ]
}
