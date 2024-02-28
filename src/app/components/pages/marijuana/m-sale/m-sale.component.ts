import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faCannabis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-m-sale',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './m-sale.component.html',
  styleUrl: './m-sale.component.css'
})
export class MSaleComponent {
  star= faStar;
  cart =faCartShopping;
    search=faMagnifyingGlass;
    heart= faHeart;
    compare= faCodeCompare;
    cannabis=faCannabis
    sale = [
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
