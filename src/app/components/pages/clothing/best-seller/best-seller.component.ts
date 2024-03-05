import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
  faCodeCompare,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../interfaces/product';
import { CartService } from '../../../../services/cart.service';
@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css',
})
export class BestSellerComponent {
  star = faStar;
  cart = faCartShopping;
  search = faMagnifyingGlass;
  heart = faHeart;
  compare = faCodeCompare;
  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  products:Product[] = [
    {
      id: 1,
      mainimg: 'assets/i2.jpg',
      secimg:1,
      title: 'Trim Dresses',
      price: 87.00,
      quantity:10
    },
    {
      id: 2,
      mainimg: 'assets/i3.jpg',
      secimg:1,
      title: 'Belted Dresses',
      price: 111.00,
      quantity:10
    },
    {
      id: 3,
      mainimg: 'assets/i6.jpg',
      secimg:1,
      title: 'Fitted Dresses',
      price: 104.00,
      quantity:10
    },
    {
      id: 4,
      mainimg: 'assets/i9.jpg',
      secimg:1,
      title: 'Fitted Dresses',
      price: 104.00,
      quantity:10
    },
    {
      id: 5,
      mainimg: 'assets/i12.jpg',
      secimg:1,
      title: 'Trim Dresses',
      price: 87.00,
      quantity:10
    },
    {
      id: 6,
      mainimg: 'assets/i16.jpg',
      secimg:1,
      title: 'Belted Dresses',
      price: 111.00,
      quantity:10
    },
    {
      id: 7,
      mainimg: 'assets/i13.jpg',
      secimg:1,
      title: 'Fitted Dresses',
      price: 104.00,
      quantity:10
    },
    {
      id: 8,
      mainimg: 'assets/i11.jpg',
      secimg:1,
      title: 'Fitted Dresses',
      price: 104.00,
      quantity:10
    },
  ];
}
