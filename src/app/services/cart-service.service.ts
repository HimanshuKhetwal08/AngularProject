import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private cart: any[] = [];
  private cartItemsCountSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  constructor() {}

  addToCart(selectedProduct: any) {
    const productCopy = { ...selectedProduct }; // Create a copy of the selected product
    const existingItem = this.cart.find(
      (item) => item.productId === productCopy.productId
    );

    if (existingItem) {
      existingItem.quantity += productCopy.quantity;
    } else {
      this.cart.push(productCopy); // Push the copy into the cart array
      this.cartItemsCountSubject.next(this.cart.length);
    }
  }

  removeFromCart(product: any) {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    this.cartItemsCountSubject.next(this.cart.length);
  }

  getCart() {
    return this.cart;
  }

  get cartItemsCount() {
    return this.cartItemsCountSubject.asObservable();
  }
}
