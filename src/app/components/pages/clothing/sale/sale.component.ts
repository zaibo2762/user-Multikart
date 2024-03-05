import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../interfaces/product';
@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {
  star = faStar;
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
    products:Product[] = [
      {
        id:1,
        mainimg:"assets/i22.jpg",
       secimg:1,
      title:'Trim Dresses',
      price:87.00,
      quantity:32
      },
      {
        id:2,
        mainimg:"assets/i23.jpg",
       secimg:1,
      title:'Belted Dresses',
      price:111.00,
      quantity:13
      },
      {
        id:3,
        mainimg:"assets/i26.jpg",
        secimg:1,
      title:'Fitted Dresses',
      price:104.00,
      quantity:23
          },
      {
        id:4,
        mainimg:"assets/i20.jpg",
        secimg:1,
      title:'Fitted Dresses',
      price:104.00,
      quantity:34
      },
      {
        id:5,
        mainimg:"assets/i30.jpg",
        secimg:1,
      title:'Trim Dresses',
      price:87.00,
      quantity:45
      },
      {
        id:6,
        mainimg:"assets/i28.jpg",
        secimg:1,
      title:'Belted Dresses',
      price:111.00,
      quantity:34
      },
      {
        id:7,
        mainimg:"assets/i29.jpg",
        secimg:2,
      title:'Fitted Dresses',
      price:104.00,
      quantity:123
      },
      {
        id:8,
        mainimg:"assets/i19.jpg",
        secimg:1,
      title:'Fitted Dresses',
      price:104.00,
      quantity:10
      },
    ]
    constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
