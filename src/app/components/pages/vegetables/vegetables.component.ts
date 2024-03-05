import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTruck,faClock,faBullhorn,faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare} from '@fortawesome/free-solid-svg-icons'
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../interfaces/product';
@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.css'
})
export class VegetablesComponent {
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
      mainimg:"assets/v1.jpg",
      secimg:10,
    title:'Beetrot',
    price:31.50,
    quantity:10
    },
    {
      id:2,
      mainimg:"assets/v2.jpg",
      secimg:10,
    title:'Cabbage',
    price:20.00,
    quantity:10
    },
    {
      id:3,
      mainimg:"assets/v3.jpg",
      secimg:10,
    title:'Onion',
    price:27.55,
    quantity:10
    },
    {
      id:4,
      mainimg:"assets/v4.jpg",
      secimg:10,
    title:'Brinjal',
    price:19.60,
    quantity:10
    },
    
  ]
}
