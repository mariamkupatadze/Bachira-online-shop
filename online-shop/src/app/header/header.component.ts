import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductPageComponent } from '../add-product-page/add-product-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private _dialog: MatDialog, private route: Router) {}

  ngOnInit(): void { }

  getUser() {
   return  this.firebaseService.getUser()?.email;
  }

  openAddProduct() {
    let dialog = this._dialog.open(AddProductPageComponent);

    dialog.afterClosed().subscribe(() => {
      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.route.navigate(['products']));    
      });
    }

  signout() {
    this.firebaseService.logOut();
  }

} 
