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
  Best = [
    {
      id: 1,
      imgurl: 'assets/bag9.jpg',
      name: 'Bag 9',
      price: '$301.00',
    },
    {
      id: 2,
      imgurl: 'assets/bag10.jpg',
      name: 'Bag 10',
      price: '$216.60',
    },
    {
      id: 3,
      imgurl: 'assets/bag11.jpg',
      name: 'Bag 11',
      price: '$170.00',
    },
    {
      id: 4,
      imgurl: 'assets/bag12.jpg',
      name: 'Bag 12',
      price: '$346.50',
    },
  ];
}
