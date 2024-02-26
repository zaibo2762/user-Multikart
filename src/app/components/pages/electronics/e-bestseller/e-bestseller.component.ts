import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faCodeCompare, faHeart, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-e-bestseller',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './e-bestseller.component.html',
  styleUrl: './e-bestseller.component.css'
})
export class EBestsellerComponent {
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
  star= faStar;
  electronics = [
    {
      id:1,
      imgurl:'assets/e1.jpg',
      name:'Electronic 1',
      price:"$301.00"
    },
    {
      id:2,
      imgurl:'assets/e2.jpg',
      name:'Electronic 2',
      price:"$216.60"
    },
    {
      id:3,
      imgurl:'assets/e3.jpg',
      name:'Electronic 3',
      price:"$170.00"
    },
    {
      id:4,
      imgurl:'assets/e4.jpg',
      name:'Electronic 4',
      price:"$346.50"
    },
    {
      id:5,
      imgurl:'assets/e5.jpg',
      name:'Electronic 5',
      price:"$26.00"
    },
    {
      id:6,
      imgurl:'assets/e6.jpg',
      name:'Electronic 6',
      price:"$111.00"
    },
    {
      id:7,
      imgurl:'assets/e7.jpg',
      name:'Electronic 7',
      price:"$520.00"
    },
    {
      id:8,
      imgurl:'assets/e8.jpg',
      name:'Electronic 8',
      price:"$212.00"
    },
  ]
}
