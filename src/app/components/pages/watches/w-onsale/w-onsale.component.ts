import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-w-onsale',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './w-onsale.component.html',
  styleUrl: './w-onsale.component.css'
})
export class WOnsaleComponent {
  star = faStar;
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
    sale = [
      {
        id:1,
        mainimg:"assets/w17.jpg",
       
      title:'Watch 1',
      price:"$87.00"
      },
      {
        id:2,
        mainimg:"assets/w18.jpg",
       
      title:'Watch 2',
      price:"$111.00"
      },
      {
        id:3,
        mainimg:"assets/w19.jpg",
        
      title:'Watch 3',
      price:"$104.00"
      },
      {
        id:4,
        mainimg:"assets/w20.jpg",
        
      title:'Watch 4',
      price:"$104.00"
      },
      {
        id:5,
        mainimg:"assets/w21.jpg",
        
      title:'Watch 5',
      price:"$87.00"
      },
      {
        id:6,
        mainimg:"assets/w22.jpg",
        
      title:'Watch 17',
      price:"$111.00"
      },
      {
        id:7,
        mainimg:"assets/w23.jpg",
        
      title:'Watch 7',
      price:"$104.00"
      },
      {
        id:8,
        mainimg:"assets/w24.jpg",
      title:'Watch 18',
      price:"$104.00"
      },
    ]
}
