import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './pages/register/register.component';
import { GucciComponent } from './brands/gucci/gucci.component';
import { AdidasComponent } from './brands/adidas/adidas.component';
import { BalenciagaComponent } from './brands/balenciaga/balenciaga.component';
import { NikeComponent } from './brands/nike/nike.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'products', component: ProductsComponent},
  { path:'brands', component:BrandsComponent},
  { path:'login', component:LoginComponent},
  { path:'admin', component:AdminComponent},
  { path:'register', component:RegisterComponent},
  { path:'gucci', component:GucciComponent},
  { path:'adidas', component:AdidasComponent},
  { path:'balenciaga', component:BalenciagaComponent},
  { path:'nike', component:NikeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
