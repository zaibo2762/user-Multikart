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
  selector: 'app-bag-bestseller',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './bag-bestseller.component.html',
  styleUrl: './bag-bestseller.component.css',
})
export class BagBestsellerComponent {
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
      mainimg: 'assets/bag9.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 9',
      price: 301.00,
    },
    {
      id: 2,
      mainimg: 'assets/bag10.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 10',
      price: 216.60,
    },
    {
      id: 3,
      mainimg: 'assets/bag11.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 11',
      price: 170.00,
    },
    {
      id: 4,
      mainimg: 'assets/bag12.jpg',
      secimg:10,
      quantity:10,
      title: 'Bag 12',
      price: 346.50,
    },
  ];
}
