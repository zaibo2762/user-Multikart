import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-s-featured',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './s-featured.component.html',
  styleUrl: './s-featured.component.css'
})
export class SFeaturedComponent {
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
  star= faStar;
  featured = [
    {
      id:1,
      imgurl:'assets/s13.jpg',
      name:'Shoes 13',
      price:"$301.00"
    },
    {
      id:2,
      imgurl:'assets/s14.jpg',
      name:'Shoes 14',
      price:"$216.60"
    },
    {
      id:3,
      imgurl:'assets/s15.jpg',
      name:'Shoes 15',
      price:"$170.00"
    },
    {
      id:4,
      imgurl:'assets/s16.jpg',
      name:'Shoes 16',
      price:"$346.50"
    },
    
  ]
}
