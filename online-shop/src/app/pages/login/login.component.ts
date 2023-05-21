import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  signInReactiveForm : FormGroup;
  constructor(public firebaseService: FirebaseService, private route: Router) {}
  
  ngOnInit(): void {
    this.signInReactiveForm = new FormGroup ({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  getUser() {
    return  this.firebaseService.getUser()?.email;
   }

  async fireSignIn() {
    await this.firebaseService.signin(
      this.signInReactiveForm.get('email').value,
      this.signInReactiveForm.get('password').value,
      )
    if (this.firebaseService.getUser()?.email) {
     this.route.navigate(['./home']);
    }
   }

   onSubmit() {
    if (this.signInReactiveForm.valid) {
      this.fireSignIn();
    }
   }
}
