import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit{

  cartProducts: Product[] = [];
  cartTotal = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartProducts = items;
    });
    this.cartService.getCartTotal().subscribe(total => {
      this.cartTotal = total;})
      }
  decrementQuantity(item: Product) {
    this.cartService.decrementQuantity(item);  // Add this line
  }

  removeItem(item: Product) {
    this.cartService.removeItem(item);
  }
  incrementQuantity(item: Product) {
  
    this.cartService.incrementQuantity(item);
  }
}
