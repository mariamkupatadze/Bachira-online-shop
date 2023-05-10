import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { PricingComponent } from './pages/pricing/pricing.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'products', component: ProductsComponent},
  { path:'categories', component:CategoriesComponent},
  { path:'brands', component:BrandsComponent},
  { path:'pricing', component: PricingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
