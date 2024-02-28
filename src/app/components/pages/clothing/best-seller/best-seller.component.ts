import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
  faCodeCompare,
} from '@fortawesome/free-solid-svg-icons';
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
  list = [
    {
      id: 1,
      mainimg: 'assets/i2.jpg',

      title: 'Trim Dresses',
      price: '$87.00',
    },
    {
      id: 2,
      mainimg: 'assets/i3.jpg',

      title: 'Belted Dresses',
      price: '$111.00',
    },
    {
      id: 3,
      mainimg: 'assets/i6.jpg',

      title: 'Fitted Dresses',
      price: '$104.00',
    },
    {
      id: 4,
      mainimg: 'assets/i9.jpg',

      title: 'Fitted Dresses',
      price: '$104.00',
    },
    {
      id: 1,
      mainimg: 'assets/i12.jpg',

      title: 'Trim Dresses',
      price: '$87.00',
    },
    {
      id: 2,
      mainimg: 'assets/i16.jpg',

      title: 'Belted Dresses',
      price: '$111.00',
    },
    {
      id: 3,
      mainimg: 'assets/i13.jpg',

      title: 'Fitted Dresses',
      price: '$104.00',
    },
    {
      id: 4,
      mainimg: 'assets/i11.jpg',
      title: 'Fitted Dresses',
      price: '$104.00',
    },
  ];
}
