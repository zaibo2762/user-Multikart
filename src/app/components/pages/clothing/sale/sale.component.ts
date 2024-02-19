import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {
  star = faStar;
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
    list = [
      {
        id:1,
        mainimg:"assets/i22.jpg",
       
      title:'Trim Dresses',
      price:"$87.00"
      },
      {
        id:2,
        mainimg:"assets/i23.jpg",
       
      title:'Belted Dresses',
      price:"$111.00"
      },
      {
        id:3,
        mainimg:"assets/i26.jpg",
        
      title:'Fitted Dresses',
      price:"$104.00"
      },
      {
        id:4,
        mainimg:"assets/i20.jpg",
        
      title:'Fitted Dresses',
      price:"$104.00"
      },
      {
        id:1,
        mainimg:"assets/i30.jpg",
        
      title:'Trim Dresses',
      price:"$87.00"
      },
      {
        id:2,
        mainimg:"assets/i28.jpg",
        
      title:'Belted Dresses',
      price:"$111.00"
      },
      {
        id:3,
        mainimg:"assets/i29.jpg",
        
      title:'Fitted Dresses',
      price:"$104.00"
      },
      {
        id:4,
        mainimg:"assets/i19.jpg",
      title:'Fitted Dresses',
      price:"$104.00"
      },
    ]
}
