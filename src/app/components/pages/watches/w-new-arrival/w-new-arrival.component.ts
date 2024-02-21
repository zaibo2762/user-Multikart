import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-w-new-arrival',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './w-new-arrival.component.html',
  styleUrl: './w-new-arrival.component.css'
})
export class WNewArrivalComponent {
  star = faStar;
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
    arrivals = [
      {
        id:1,
        mainimg:"assets/w1.jpg",
       
      title:'Watch 1',
      price:"$87.00"
      },
      {
        id:2,
        mainimg:"assets/w2.jpg",
       
      title:'Watch 2',
      price:"$111.00"
      },
      {
        id:3,
        mainimg:"assets/w3.jpg",
        
      title:'Watch 3',
      price:"$104.00"
      },
      {
        id:4,
        mainimg:"assets/w4.jpg",
        
      title:'Watch 4',
      price:"$104.00"
      },
      {
        id:5,
        mainimg:"assets/w5.jpg",
        
      title:'Watch 5',
      price:"$87.00"
      },
      {
        id:6,
        mainimg:"assets/w6.jpg",
        
      title:'Watch 17',
      price:"$111.00"
      },
      {
        id:7,
        mainimg:"assets/w7.jpg",
        
      title:'Watch 7',
      price:"$104.00"
      },
      {
        id:8,
        mainimg:"assets/w8.jpg",
      title:'Watch 18',
      price:"$104.00"
      },
    ]
}
