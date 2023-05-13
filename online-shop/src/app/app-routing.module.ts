import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'products', component: ProductsComponent},
  { path:'categories', component:CategoriesComponent},
  { path:'brands', component:BrandsComponent},
  { path:'login-register', component:LoginRegisterComponent},
  { path:'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
