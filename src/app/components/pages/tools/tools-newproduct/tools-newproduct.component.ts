import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck, faClock, faBullhorn, faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tools-newproduct',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './tools-newproduct.component.html',
  styleUrl: './tools-newproduct.component.css'
})
export class ToolsNewproductComponent {
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
      img:"assets/t7.jpg",
      title:"Oil Filter",
      price:"$592.00"
    },
    {
      id:2,
      img:"assets/t8.jpg",
      title:"Air Cleaner",
      price:"$509.00"
    },
    {
      id:3,
      img:"assets/t9.jpg",
      title:"Coil Ignition",
      price:"$720.00"
    },
    {
      id:4,
      img:"assets/t10.jpg",
      title:"Glowplug",
      price:"$672.00"
    },
  ]
}
