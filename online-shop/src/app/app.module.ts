import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { FooterComponent } from './footer/footer.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    FooterComponent,
    LoginRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp ({
      apiKey: "AIzaSyAYGsysSmrHC3x7gMSX_MliGOz1DRR465Q",
      authDomain: "online-shop-b9ca5.firebaseapp.com",
      projectId: "online-shop-b9ca5",
      storageBucket: "online-shop-b9ca5.appspot.com",
      messagingSenderId: "97800888789",
      appId: "1:97800888789:web:9a7f168115a583dfb5dd5c",
      measurementId: "G-CWHD2XBJK4"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
