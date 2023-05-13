import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit{

  constructor(public firebaseService: FirebaseService, private route: Router) {}
  
  ngOnInit(): void {
  }

  getUser() {
    return  this.firebaseService.getUser()?.email;
   }

 async fireSignUp(email: string, password: string) {
    await this.firebaseService.signup(email, password)
  }

  async fireSignIn(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if(this.firebaseService.getUser()?.email) {
     this.route.navigate(['./home']);
    }
   }

   async logOut() {
   }

}
