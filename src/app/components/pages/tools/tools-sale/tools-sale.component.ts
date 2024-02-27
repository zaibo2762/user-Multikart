import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck, faClock, faBullhorn, faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tools-sale',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './tools-sale.component.html',
  styleUrl: './tools-sale.component.css'
})
export class ToolsSaleComponent {
  truck= faTruck;
  clock = faClock;
  horn = faBullhorn;
  star= faStar;
  cart =faCartShopping;
    search=faMagnifyingGlass;
    heart= faHeart;
    compare= faCodeCompare;
  Parts= [
    {
      id:1,
      img:"assets/t1.jpg",
      title:"Wheel Bearing",
      price:"$450.00"
    },
    {
      id:2,
      img:"assets/t2.jpg",
      title:"Cable Clutch",
      price:"$420.00"
    },
    {
      id:3,
      img:"assets/t3.jpg",
      title:"Cap Wheel",
      price:"$532.00"
    },
    {
      id:4,
      img:"assets/t4.jpg",
      title:"Suspensions",
      price:"$408.00"
    },
  ]
}
