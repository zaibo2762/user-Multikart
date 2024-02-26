import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-e-onsale',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './e-onsale.component.html',
  styleUrl: './e-onsale.component.css' 
})
export class EOnsaleComponent {
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
  star= faStar;
  electronics = [
    {
      id:1,
      imgurl:'assets/e2.jpg',
      name:'Electronic 2',
      price:"$301.00"
    },
    {
      id:2,
      imgurl:'assets/e6.jpg',
      name:'Electronic 6',
      price:"$216.60"
    },
    {
      id:3,
      imgurl:'assets/e7.jpg',
      name:'Electronic 7',
      price:"$170.00"
    },
    {
      id:4,
      imgurl:'assets/e8.jpg',
      name:'Electronic 8',
      price:"$346.50"
    },
    {
      id:5,
      imgurl:'assets/e9.jpg',
      name:'Electronic 9',
      price:"$26.00"
    },
    {
      id:6,
      imgurl:'assets/e10.jpg',
      name:'Electronic 10',
      price:"$111.00"
    },
    {
      id:7,
      imgurl:'assets/e11.jpg',
      name:'Electronic 11',
      price:"$520.00"
    },
    {
      id:8,
      imgurl:'assets/e13.jpg',
      name:'Electronic 13',
      price:"$212.00"
    },
  ]
}
