import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-f-arrival',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './f-arrival.component.html',
  styleUrl: './f-arrival.component.css'
})
export class FArrivalComponent {
  star = faStar;
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
    arrivals = [
      {
        id:1,
        mainimg:"assets/f8.jpg",
       
      title:'Arm Chair',
      price:"$200.00"
      },
      {
        id:2,
        mainimg:"assets/f4.jpg",
       
      title:'Oak Finish Chair',
      price:"$275.00"
      },
      {
        id:3,
        mainimg:"assets/f5.jpg",
        
      title:'Wooden Chair',
      price:"$160.00"
      },
      {
        id:4,
        mainimg:"assets/f6.jpg",
        
      title:'Metal Table Lamp',
      price:"$240.00"
      },
      {
        id:5,
        mainimg:"assets/f13.jpg",
        
      title:'Wood End Table',
      price:"$400.00"
      },
      {
        id:6,
        mainimg:"assets/f11.jpg",
        
      title:'Lounge Chair',
      price:"$378.00"
      },
      {
        id:7,
        mainimg:"assets/f10.jpg",
        
      title:'Rocking Chair',
      price:"$448.00"
      },
      {
        id:8,
        mainimg:"assets/f9.jpg",
      title:'Barrel Chair',
      price:"$457.00"
      },
    ]
}
