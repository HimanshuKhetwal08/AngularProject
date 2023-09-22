import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private cartService: CartServiceService) {}
  totalProducts: number = 0;

  ngOnInit(): void {
    this.cartService.cartItemsCount.subscribe((count) => {
      this.totalProducts = count;
    });
  }
}
