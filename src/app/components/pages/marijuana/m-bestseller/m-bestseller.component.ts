import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faCannabis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-m-bestseller',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './m-bestseller.component.html',
  styleUrl: './m-bestseller.component.css'
})
export class MBestsellerComponent {
  star= faStar;
  cart =faCartShopping;
    search=faMagnifyingGlass;
    heart= faHeart;
    compare= faCodeCompare;
    cannabis=faCannabis
    best = [
      {
        id:1,
        mainimg:"assets/m4.jpg",
       
      title:'Tincture',
      price:"$31.50"
      },
      {
        id:2,
        mainimg:"assets/m5.jpg",
       
      title:'Indica',
      price:"$20.00"
      },
      {
        id:3,
        mainimg:"assets/m6.jpg",
        
      title:'Sativa',
      price:"$27.55"
      },
      
    ]
}
