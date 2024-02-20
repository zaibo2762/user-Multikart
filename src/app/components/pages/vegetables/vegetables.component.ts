import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTruck,faClock,faBullhorn,faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.css'
})
export class VegetablesComponent {
truck= faTruck;
clock = faClock;
horn = faBullhorn;
star= faStar;
cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
  list = [
    {
      id:1,
      mainimg:"assets/v1.jpg",
     
    title:'Beetrot',
    price:"$31.50"
    },
    {
      id:2,
      mainimg:"assets/v2.jpg",
     
    title:'Cabbage',
    price:"$20.00"
    },
    {
      id:3,
      mainimg:"assets/v3.jpg",
      
    title:'Onion',
    price:"$27.55"
    },
    {
      id:4,
      mainimg:"assets/v4.jpg",
      
    title:'Brinjal',
    price:"$19.60"
    },
    
  ]
}
