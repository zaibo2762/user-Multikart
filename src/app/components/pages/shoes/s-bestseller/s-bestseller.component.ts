import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-s-bestseller',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './s-bestseller.component.html',
  styleUrl: './s-bestseller.component.css'
})
export class SBestsellerComponent {
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
  star= faStar;
  Best = [
    {
      id:1,
      imgurl:'assets/s1.jpg',
      name:'Shoes 1',
      price:"$301.00"
    },
    {
      id:2,
      imgurl:'assets/s2.jpg',
      name:'Shoes 2',
      price:"$216.60"
    },
    {
      id:3,
      imgurl:'assets/s3.jpg',
      name:'Shoes 3',
      price:"$170.00"
    },
    {
      id:4,
      imgurl:'assets/s4.jpg',
      name:'Shoes 4',
      price:"$346.50"
    },
    
  ]
}
