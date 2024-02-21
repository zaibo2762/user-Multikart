import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-w-bestseller',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './w-bestseller.component.html',
  styleUrl: './w-bestseller.component.css'
})
export class WBestsellerComponent {
  star = faStar;
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
    sellers = [
      {
        id:1,
        mainimg:"assets/w9.jpg",
       
      title:'Watch 1',
      price:"$87.00"
      },
      {
        id:2,
        mainimg:"assets/w10.jpg",
       
      title:'Watch 2',
      price:"$111.00"
      },
      {
        id:3,
        mainimg:"assets/w11.jpg",
        
      title:'Watch 3',
      price:"$104.00"
      },
      {
        id:4,
        mainimg:"assets/w12.jpg",
        
      title:'Watch 4',
      price:"$104.00"
      },
      {
        id:5,
        mainimg:"assets/w13.jpg",
        
      title:'Watch 5',
      price:"$87.00"
      },
      {
        id:6,
        mainimg:"assets/w14.jpg",
        
      title:'Watch 17',
      price:"$111.00"
      },
      {
        id:7,
        mainimg:"assets/w15.jpg",
        
      title:'Watch 7',
      price:"$104.00"
      },
      {
        id:8,
        mainimg:"assets/w16.jpg",
      title:'Watch 18',
      price:"$104.00"
      },
    ]
}
