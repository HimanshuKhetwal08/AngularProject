import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOmepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'homepage', component: HOmepageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
