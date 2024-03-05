import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck, faClock, faBullhorn, faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../interfaces/product';
import { CartService } from '../../../../services/cart.service';

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
    constructor(private cartService: CartService) {}

    addToCart(product: Product) {
      this.cartService.addToCart(product);
    }
    products:Product[] = [
    {
      id:1,
      mainimg:"assets/t1.jpg",
      secimg:10,
      quantity:10,
      title:"Wheel Bearing",
      price:450.00
    },
    {
      id:2,
      mainimg:"assets/t2.jpg",
      secimg:10,
      quantity:10,
      title:"Cable Clutch",
      price:420.00
    },
    {
      id:3,
      mainimg:"assets/t3.jpg",
      secimg:10,
      quantity:10,
      title:"Cap Wheel",
      price:532.00
    },
    {
      id:4,
      mainimg:"assets/t4.jpg",
      secimg:10,
      quantity:10,
      title:"Suspensions",
      price:408.00
    },
  ]
}
