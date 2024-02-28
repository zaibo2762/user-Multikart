import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
  faCodeCompare,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

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
  Trending = [
    {
      id: 1,
      imgurl: 'assets/bag5.jpg',
      name: 'Bag 5',
      price: '$301.00',
    },
    {
      id: 2,
      imgurl: 'assets/bag6.jpg',
      name: 'Bag 6',
      price: '$216.60',
    },
    {
      id: 3,
      imgurl: 'assets/bag7.jpg',
      name: 'Bag 7',
      price: '$170.00',
    },
    {
      id: 4,
      imgurl: 'assets/bag8.jpg',
      name: 'Bag 8',
      price: '$346.50',
    },
  ];
}
