import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
  faCodeCompare,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../interfaces/product';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-bag-newarrival',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './bag-newarrival.component.html',
  styleUrl: './bag-newarrival.component.css',
})
export class BagNewarrivalComponent {
  cart = faCartShopping;
  search = faMagnifyingGlass;
  heart = faHeart;
  compare = faCodeCompare;
  star = faStar;
  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  products:Product[] = [
    {
      id: 1,
      mainimg: 'assets/bag1.jpg',
      title: 'Bag 1',
      secimg:10,
      quantity:10,
      price: 301.00,
    },
    {
      id: 2,
      mainimg: 'assets/bag2.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 2',
      price: 216.60,
    },
    {
      id: 3,
      mainimg: 'assets/bag3.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 3',
      price: 170.00,
    },
    {
      id: 4,
      mainimg: 'assets/bag4.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 4',
      price: 346.50,
    },
  ];
}
