import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-s-sale',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './s-sale.component.html',
  styleUrl: './s-sale.component.css'
})
export class SSaleComponent {
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
  star= faStar;
  Sale = [
    {
      id:1,
      imgurl:'assets/s9.jpg',
      name:'Shoes 9',
      price:"$301.00"
    },
    {
      id:2,
      imgurl:'assets/s10.jpg',
      name:'Shoes 10',
      price:"$216.60"
    },
    {
      id:3,
      imgurl:'assets/s11.jpg',
      name:'Shoes 11',
      price:"$170.00"
    },
    {
      id:4,
      imgurl:'assets/s12.jpg',
      name:'Shoes 12',
      price:"$346.50"
    },
    
  ]
}
