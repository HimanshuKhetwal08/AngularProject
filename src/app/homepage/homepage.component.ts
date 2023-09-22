import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HOmepageComponent implements OnInit {
  constructor(private cartService: CartServiceService, private router:Router) {}

  ngOnInit(): void {}

  products = [
    {
      productId: '1',
      productName: 'Guangzhou sweater',
      productImage:
        'https://preview.colorlib.com/theme/fashi/img/products/product-2.jpg',
      price: '1400',
      quantity: 1,
    },
    {
      productId: '2',
      productName: "Men's Painted Hat",
      productImage:
        'https://preview.colorlib.com/theme/fashi/img/products/product-5.jpg',
      price: '1800',
      quantity: 1,
    },
    {
      productId: '3',
      productName: 'Printed Sweater',
      productImage:
        'https://preview.colorlib.com/theme/fashi/img/products/product-6.jpg',
      price: '1450',
      quantity: 1,
    },
    {
      productId: '4',
      productName: 'Converse Shoes',
      productImage:
        'https://preview.colorlib.com/theme/fashi/img/products/product-9.jpg',
      price: '1980',
      quantity: 1,
    },
    {
      productId: '5',
      productName: 'Microfibre Wool Scarf',
      productImage:
        'https://preview.colorlib.com/theme/fashi/img/products/product-4.jpg',
      price: '2650',
      quantity: 1,
    },
  ];

  increaseQuantity(index: number) {
    if (this.products[index].quantity < 10) {
      this.products[index].quantity++;
    }
  }

  decreaseQuantity(index: number) {
    if (this.products[index].quantity > 1) {
      this.products[index].quantity--;
    }
  }

  addToCart(selectedProduct: any) {
    
    this.cartService.addToCart(selectedProduct);

    console.log(this.cartService.getCart());
  }

 
}
