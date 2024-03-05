import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
  faCodeCompare,
  faLessThan,
  faGreaterThan,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../interfaces/product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule],
  templateUrl: './bags.component.html',
  styleUrl: './bags.component.css',
})
export class BagsComponent {
  content1 = true;
  content2 = true;
  togglecontent1() {
    this.content1 = !this.content1;
  }
  togglecontent2() {
    this.content2 = !this.content2;
  }
  star = faStar;
  cart = faCartShopping;
  search = faMagnifyingGlass;
  heart = faHeart;
  compare = faCodeCompare;
  previous = faLessThan;
  next = faGreaterThan;
  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  products:Product[] = [
    {
      id: 1,
      mainimg: 'assets/bag1.jpg',
      secimg: 'assets/bag2.jpg',
      title: 'BAG 1',
      price: 31.50,
      quantity:10
    },
    {
      id: 2,
      mainimg: 'assets/bag3.jpg',
      secimg: 'assets/bag4.jpg',
      title: 'BAG 2',
      price: 20.00,
      quantity:10
    },
    {
      id: 3,
      mainimg: 'assets/bag5.jpg',
      secimg: 'assets/bag6.jpg',
      title: 'BAG 3',
      price: 27.55,
      quantity:10
    },
    {
      id: 4,
      mainimg: 'assets/bag7.jpg',
      secimg: 'assets/bag8.jpg',
      title: 'Bag 4',
      price: 19.60,
      quantity:10
    },
  ];
}
