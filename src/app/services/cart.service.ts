import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

interface CartItem extends Product{
  quantity:number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  calculateTotalPrice(): void {
    let total = 0;
    this.cartItems.value.forEach(item => {
      total += (item.price * item.quantity); 
    });
    this.cartTotal.next(total);
  }

  
    private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartCount = new BehaviorSubject<number>(0);
  cartTotal = new BehaviorSubject<number>(0);

  getCartItems() {
    return this.cartItems.asObservable();
  }

  getCartCount() {
    return this.cartCount.asObservable();
  }

  addToCart(product: Product) {
    let existingItem = this.cartItems.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.next([...this.cartItems.value, { ...product, quantity: 1 }]);
    }
    this.cartCount.next(this.cartCount.value + 1);
    this.calculateTotalPrice();
  }
  removeItem(product: Product) {
    const index = this.cartItems.value.findIndex((item) => item.id === product.id); 
    if (index !== -1) {
      const removedItem = this.cartItems.value[index];
      this.cartCount.next(this.cartCount.value - removedItem.quantity); // Subtract the quantity 
      this.cartItems.next(this.cartItems.value.filter((_, i) => i !== index)); 
      this.calculateTotalPrice(); 
    }
  }
  incrementQuantity(product: Product) {
    let total = 0;
    this.cartItems.value.forEach(item => {
      total += (item.price * item.quantity); 
    });
    const existingItem = this.cartItems.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.next([...this.cartItems.value, { ...product, quantity: 1 }]);
    }
    this.cartCount.next(this.cartCount.value + 1);

    this.calculateTotalPrice();
  }
  
  decrementQuantity(product: Product) { 
    const existingItem = this.cartItems.value.find(item => item.id === product.id);
    if (existingItem) {
      if (existingItem.quantity > 1) { 
        existingItem.quantity--;
      } else {
        
        this.cartItems.next(this.cartItems.value.filter(item => item.id !== product.id));
      }
      this.cartCount.next(this.cartCount.value - 1);
      this.calculateTotalPrice(); 
    }
  }
 

  getCartTotal() { 
    return this.cartTotal.asObservable();
  }

}
