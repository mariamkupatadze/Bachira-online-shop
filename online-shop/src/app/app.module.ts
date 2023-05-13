import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { FooterComponent } from './footer/footer.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { FirebaseService } from './services/firebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';

import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    BrandsComponent,
    FooterComponent,
    LoginRegisterComponent,
    AdminComponent,
    AddProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    AngularFireModule.initializeApp ({
      apiKey: "AIzaSyAYGsysSmrHC3x7gMSX_MliGOz1DRR465Q",
      authDomain: "online-shop-b9ca5.firebaseapp.com",
      projectId: "online-shop-b9ca5",
      storageBucket: "online-shop-b9ca5.appspot.com",
      messagingSenderId: "97800888789",
      appId: "1:97800888789:web:9a7f168115a583dfb5dd5c",
      measurementId: "G-CWHD2XBJK4"
    }),
    BrowserAnimationsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
