// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: Product) {
    this.cartItems.push(item);
    this.cartItemsSubject.next([...this.cartItems]);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
}
