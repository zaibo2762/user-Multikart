import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-s-newarrival',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './s-newarrival.component.html',
  styleUrl: './s-newarrival.component.css'
})
export class SNewarrivalComponent {
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
  star= faStar;
  New = [
    {
      id:1,
      imgurl:'assets/s5.jpg',
      name:'Shoes 5',
      price:"$301.00"
    },
    {
      id:2,
      imgurl:'assets/s6.jpg',
      name:'Shoes 6',
      price:"$216.60"
    },
    {
      id:3,
      imgurl:'assets/s7.jpg',
      name:'Shoes 7',
      price:"$170.00"
    },
    {
      id:4,
      imgurl:'assets/s8.jpg',
      name:'Shoes 8',
      price:"$346.50"
    },
    
  ]
}
