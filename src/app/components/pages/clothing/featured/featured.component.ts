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
  list = [
    {
      id: 1,
      mainimg: 'assets/i12.jpg',

      title: 'Trim Dresses',
      price: '$87.00',
    },
    {
      id: 2,
      mainimg: 'assets/i13.jpg',

      title: 'Belted Dresses',
      price: '$111.00',
    },
    {
      id: 3,
      mainimg: 'assets/i16.jpg',

      title: 'Fitted Dresses',
      price: '$104.00',
    },
    {
      id: 4,
      mainimg: 'assets/i20.jpg',

      title: 'Fitted Dresses',
      price: '$104.00',
    },
    {
      id: 1,
      mainimg: 'assets/i21.jpg',

      title: 'Trim Dresses',
      price: '$87.00',
    },
    {
      id: 2,
      mainimg: 'assets/i22.jpg',

      title: 'Belted Dresses',
      price: '$111.00',
    },
    {
      id: 3,
      mainimg: 'assets/i23.jpg',

      title: 'Fitted Dresses',
      price: '$104.00',
    },
    {
      id: 4,
      mainimg: 'assets/i24.jpg',
      title: 'Fitted Dresses',
      price: '$104.00',
    },
  ];
}
