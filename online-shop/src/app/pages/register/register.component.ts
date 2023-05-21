import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signUpReactiveForm : FormGroup;
  errorText: string;
  successText: string;

  constructor(public firebaseService: FirebaseService, private route: Router, private _http: HttpClient ) {}
  
  ngOnInit(): void {
    this.signUpReactiveForm = new FormGroup ({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      gender: new FormControl(null),
    })
  }

 
  getUser() {
    return  this.firebaseService.getUser()?.email;
   }

  async fireSignUp() {
    await this.firebaseService.signup(this.signUpReactiveForm.get('email').value, this.signUpReactiveForm.get('password').value)
    .then(() => {
      this._http.post("https://online-shop-b9ca5-default-rtdb.europe-west1.firebasedatabase.app/users.json", this.signUpReactiveForm.value)
      .subscribe((response) => {
        this.successText = 'User successfully signed up!'
        this.errorText = '';
      }); 
    })
    .catch((err) => {
      this.successText = '';
      this.errorText = 'Email is already used!'
    });
  }

  onSubmit() {
    if(this.signUpReactiveForm.valid) {
      this.fireSignUp()
      console.log(this.signUpReactiveForm.value)
      // this.signUpReactiveForm.reset();
    }
  }

}
