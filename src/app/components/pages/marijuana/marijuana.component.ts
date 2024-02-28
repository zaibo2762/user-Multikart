import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck, faClock, faBullhorn, faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faCannabis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-marijuana',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './marijuana.component.html',
  styleUrl: './marijuana.component.css'
})
export class MarijuanaComponent {
  truck= faTruck;
  clock = faClock;
  horn = faBullhorn;
  star= faStar;
  cart =faCartShopping;
    search=faMagnifyingGlass;
    heart= faHeart;
    compare= faCodeCompare;
    cannabis=faCannabis
    mari = [
      {
        id:1,
        mainimg:"assets/m1.jpg",
       
      title:'Goat Head',
      price:"$31.50"
      },
      {
        id:2,
        mainimg:"assets/m2.jpg",
       
      title:'Fruit Tarts',
      price:"$20.00"
      },
      {
        id:3,
        mainimg:"assets/m3.jpg",
        
      title:'Tincture',
      price:"$27.55"
      },
      {
        id:4,
        mainimg:"assets/m4.jpg",
        
      title:'Moon Walk',
      price:"$19.60"
      },
      
    ]
}
