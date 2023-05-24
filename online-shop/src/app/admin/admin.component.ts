import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { user } from '../Users/user';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent   {
  Users: user[];
  usersArray: any = [];
  firstLetter: any;
  user: any;
 
  constructor( private _http: HttpClient, public firebaseService: FirebaseService ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._http.get<{[key: string]: user}>("https://online-shop-b9ca5-default-rtdb.europe-west1.firebasedatabase.app/users.json")
              .pipe(map((res) => {
                const users = [];
                for(const key in res) {
                  let user: user = {
                    lastname: res[key].lastname,
                    firstname: res[key].firstname,
                    gender: res[key].gender,
                    email: res[key].email,
                    password: res[key].password,
                    id : key
                  }
                 users.push(user)
                }
                return users;
              })).subscribe((res) => {
                this.usersArray = res;
                this.user= this.usersArray.find((user: any) => user.email === this.firebaseService.getUser()?.email)
                this.firstLetter = this.user?.firstname.charAt(0)
              })  

  }
 
}
