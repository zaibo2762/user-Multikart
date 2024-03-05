import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck, faClock, faBullhorn, faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../interfaces/product';

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
    constructor(private cartService: CartService) {}

    addToCart(product: Product) {
      this.cartService.addToCart(product);
    }
    products:Product[] = [
    {
      id:1,
      mainimg:"assets/t7.jpg",
      secimg:10,
      quantity:10,
      title:"Oil Filter",
      price:592.00
    },
    {
      id:2,
      mainimg:"assets/t8.jpg",
      secimg:10,
      quantity:10,
      title:"Air Cleaner",
      price:509.00
    },
    {
      id:3,
      mainimg:"assets/t9.jpg",
      secimg:10,
      quantity:10,
      title:"Coil Ignition",
      price:720.00
    },
    {
      id:4,
      mainimg:"assets/t10.jpg",
      secimg:10,
      quantity:10,
      title:"Glowplug",
      price:672.00
    },
  ]
}
