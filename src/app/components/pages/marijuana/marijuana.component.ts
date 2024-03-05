import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck, faClock, faBullhorn, faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faCannabis } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../interfaces/product';
import { CartService } from '../../../services/cart.service';

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
    constructor(private cartService: CartService) {}

    addToCart(product: Product) {
      this.cartService.addToCart(product);
    }
    products:Product[] = [
      {
        id:1,
        mainimg:"assets/m1.jpg",
       secimg:10,
       quantity:10,
      title:'Goat Head',
      price:31.50
      },
      {
        id:2,
        mainimg:"assets/m2.jpg",
        secimg:10,
        quantity:10,
      title:'Fruit Tarts',
      price:20.00
      },
      {
        id:3,
        mainimg:"assets/m3.jpg",
        secimg:10,
       quantity:10,
      title:'Tincture',
      price:27.55
      },
      {
        id:4,
        mainimg:"assets/m4.jpg",
        secimg:10,
       quantity:10,
      title:'Moon Walk',
      price:19.60
      },
      
    ]
}
