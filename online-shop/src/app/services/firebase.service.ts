import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor( public firebaseAuth: AngularFireAuth ) {  }

    
async signin(email: string, password: string) {    
  await  this.firebaseAuth.signInWithEmailAndPassword(email, password)  
            .then(response => {                                       
              localStorage.setItem('user', JSON.stringify(response.user));
            }) 
            .catch(response => {
              console.log('password or email is incorrect')
            })                                            
 }

async signup (email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
          .then(response => {  
            localStorage.setItem('user', JSON.stringify(response.user))
          }) 
}

logOut() {
  this.firebaseAuth.signOut()
  localStorage.removeItem('user')
}

getUser() {
  return JSON.parse(localStorage.getItem('user'));
}



}
