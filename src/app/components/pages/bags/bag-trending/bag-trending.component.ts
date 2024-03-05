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
  selector: 'app-bag-trending',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './bag-trending.component.html',
  styleUrl: './bag-trending.component.css',
})
export class BagTrendingComponent {
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
      mainimg: 'assets/bag5.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 5',
      price: 301.00,
    },
    {
      id: 2,
      mainimg: 'assets/bag6.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 6',
      price: 216.60,
    },
    {
      id: 3,
      mainimg: 'assets/bag7.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 7',
      price: 170.00,
    },
    {
      id: 4,
      mainimg: 'assets/bag8.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 8',
      price: 346.50,
    },
  ];
}
