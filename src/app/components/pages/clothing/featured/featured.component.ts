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
  selector: 'app-featured',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css',
})
export class FeaturedComponent {
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
      mainimg: 'assets/i12.jpg',
      secimg:10,
      title: 'Trim Dresses',
      price: 87.00,
      quantity:30
    },
    {
      id: 2,
      mainimg: 'assets/i13.jpg',
      secimg:10,
      title: 'Belted Dresses',
      price: 111.00,
      quantity:30
    },
    {
      id: 3,
      mainimg: 'assets/i16.jpg',
      secimg:10,
      title: 'Fitted Dresses',
      price: 104.00,
      quantity:30
    },
    {
      id: 4,
      mainimg: 'assets/i20.jpg',
      secimg:10,
      title: 'Fitted Dresses',
      price: 104.00,
      quantity:30
    },
    {
      id: 5,
      mainimg: 'assets/i21.jpg',
      secimg:10,
      title: 'Trim Dresses',
      price: 87.00,
      quantity:30
    },
    {
      id: 6,
      mainimg: 'assets/i22.jpg',
      secimg:10,
      title: 'Belted Dresses',
      price: 111.00,
      quantity:30
    },
    {
      id: 7,
      mainimg: 'assets/i23.jpg',
      secimg:10,
      title: 'Fitted Dresses',
      price: 104.00,
      quantity:30
    },
    {
      id: 8,
      mainimg: 'assets/i24.jpg',
      secimg:10,
      title: 'Fitted Dresses',
      price: 104.00,
      quantity:30
    },
  ];
}
