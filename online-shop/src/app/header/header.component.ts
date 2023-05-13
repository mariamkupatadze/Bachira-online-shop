import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
// import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void { }

  getUser() {
   return  this.firebaseService.getUser()?.email;
  }

  signout() {
    this.firebaseService.logOut();
  }

 
} 
