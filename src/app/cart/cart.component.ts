import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartServiceService) {}

  products: any = [];
  check: number = 0;

  ngOnInit(): void {
    this.products = this.cartService.getCart();
    this.check = this.products.length;
    console.log(this.products.length);
  }

  removeProduct(index: any) {
    const productToRemove = this.products[index];

    this.cartService.removeFromCart(productToRemove);

    // Update the products array by filtering out the removed product
    this.products = this.products.filter(
      (prod: any) => prod !== productToRemove
    );

    this.check = this.products.length;
  }

  coustomerDetailsForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  calculateAge() {
    const dob = this.coustomerDetailsForm.get('dob').value;
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      const age: any = today.getFullYear() - birthDate.getFullYear();

      // Set the calculated age in the 'age' FormControl
      this.coustomerDetailsForm.get('age').setValue(age);
    }
  }

  showDetails() {
    console.log(this.coustomerDetailsForm.value);
  }
}
