import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductPageComponent } from '../add-product-page/add-product-page.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private _dialog: MatDialog) {

  }


  OpenAddProduct() {
  this._dialog.open(AddProductPageComponent);
  }
}
