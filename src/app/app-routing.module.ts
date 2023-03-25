import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
{path:"" , redirectTo:"Products" ,pathMatch:"full"},
{path:"Products" , component:AllProductsComponent},
{path:"Products/:id" , component:ProductsDetailsComponent},
{path:"Cart" , component:CartComponent},
{path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
