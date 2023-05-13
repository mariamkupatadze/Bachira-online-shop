import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductPageComponent } from '../add-product-page/add-product-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private _dialog: MatDialog) {}

  ngOnInit(): void { }

  getUser() {
   return  this.firebaseService.getUser()?.email;
  }

  openAddProduct() {
    this._dialog.open(AddProductPageComponent);
    }

  signout() {
    this.firebaseService.logOut();
  }

 
} 
