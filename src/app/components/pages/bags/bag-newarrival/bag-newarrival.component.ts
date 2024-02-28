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
  New = [
    {
      id: 1,
      imgurl: 'assets/bag1.jpg',
      name: 'Bag 1',
      price: '$301.00',
    },
    {
      id: 2,
      imgurl: 'assets/bag2.jpg',
      name: 'Bag 2',
      price: '$216.60',
    },
    {
      id: 3,
      imgurl: 'assets/bag3.jpg',
      name: 'Bag 3',
      price: '$170.00',
    },
    {
      id: 4,
      imgurl: 'assets/bag4.jpg',
      name: 'Bag 4',
      price: '$346.50',
    },
  ];
}
