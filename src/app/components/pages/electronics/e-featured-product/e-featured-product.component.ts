import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-e-featured-product',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './e-featured-product.component.html',
  styleUrl: './e-featured-product.component.css'
})
export class EFeaturedProductComponent {
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
  star= faStar;
  electronics = [
    {
      id:1,
      imgurl:'assets/e3.jpg',
      name:'Electronic 3',
      price:"$301.00"
    },
    {
      id:2,
      imgurl:'assets/e4.jpg',
      name:'Electronic 4',
      price:"$216.60"
    },
    {
      id:3,
      imgurl:'assets/e5.jpg',
      name:'Electronic 5',
      price:"$170.00"
    },
    {
      id:4,
      imgurl:'assets/e9.jpg',
      name:'Electronic 9',
      price:"$346.50"
    },
    {
      id:5,
      imgurl:'assets/e10.jpg',
      name:'Electronic 10',
      price:"$26.00"
    },
    {
      id:6,
      imgurl:'assets/e11.jpg',
      name:'Electronic 11',
      price:"$111.00"
    },
    {
      id:7,
      imgurl:'assets/e12.jpg',
      name:'Electronic 12',
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
