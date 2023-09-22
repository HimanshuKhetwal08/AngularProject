import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HOmepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { CalculateTotalPipe } from './pipes/calculate-total.pipe';
import { SubTotalPipe } from './pipes/sub-total.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HOmepageComponent,
    CartComponent,
    CalculateTotalPipe,
    SubTotalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
