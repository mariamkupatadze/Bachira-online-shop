import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor( public firebaseAuth: AngularFireAuth,  private _http: HttpClient ) {  }

    
async signin(email: string, password: string) {    
  await  this.firebaseAuth.signInWithEmailAndPassword(email, password)  
            .then(response => {
              localStorage.setItem('user', JSON.stringify(response.user));
            })                                           
 }

async signup (email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
          .then(response => {  
            //localStorage.setItem('user', JSON.stringify(response.user))
          }) 
}

logOut() {
  this.firebaseAuth.signOut()
  localStorage.removeItem('user')
}

getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

setUser(params) {
  this._http.post("https://users-b648b-default-rtdb.europe-west1.firebasedatabase.app/users.json", params)
        .subscribe((response) => {
        }, (error) => {
          console.log('error')
        })
}

}
