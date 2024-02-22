import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTruck,faClock,faBullhorn,faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-flowers',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './flowers.component.html',
  styleUrl: './flowers.component.css'
})
export class FlowersComponent {
  truck= faTruck;
  clock = faClock;
  horn = faBullhorn;
  star= faStar;
  cart =faCartShopping;
    search=faMagnifyingGlass;
    heart= faHeart;
    compare= faCodeCompare;
    flowers = [
      {
        id:1,
        mainimg:"assets/fl1.jpg",
       
      title:'Dreamy Love',
      price:"$149.50"
      },
      {
        id:2,
        mainimg:"assets/fl2.jpg",
       
      title:'Perky Blooms',
      price:"$45.00"
      },
      {
        id:3,
        mainimg:"assets/fl3.jpg",
        
      title:'Divine Love',
      price:"$52.55"
      },
      {
        id:4,
        mainimg:"assets/fl4.jpg",
        
      title:'Charismatic Elanor',
      price:"$190.60"
      },
      
    ]
}
