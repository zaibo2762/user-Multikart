import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../interfaces/product';

@Component({
  selector: 'app-e-onsale',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './e-onsale.component.html',
  styleUrl: './e-onsale.component.css' 
})
export class EOnsaleComponent {
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
  star= faStar;
  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  products:Product[] = [
    {
      id:1,
      mainimg:'assets/e2.jpg',
      secimg:10,
      quantity:10,
      title:'Electronic 2',
      price:301.00
    },
    {
      id:2,
      mainimg:'assets/e6.jpg',
      secimg:10,
      quantity:10,
      title:'Electronic 6',
      price:216.60
    },
    {
      id:3,
      mainimg:'assets/e7.jpg',
      title:'Electronic 7',
      secimg:10,
      quantity:10,
      price:170.00
    },
    {
      id:4,
      mainimg:'assets/e8.jpg',
      title:'Electronic 8',
      secimg:10,
      quantity:10,
      price:346.50
    },
    {
      id:5,
      mainimg:'assets/e9.jpg',
      secimg:10,
      quantity:10,
      title:'Electronic 9',
      price:26.00
    },
    {
      id:6,
      mainimg:'assets/e10.jpg',
      secimg:10,
      quantity:10,
      title:'Electronic 10',
      price:111.00
    },
    {
      id:7,
      mainimg:'assets/e11.jpg',
      secimg:10,
      quantity:10,
      title:'Electronic 11',
      price:520.00
    },
    {
      id:8,
      mainimg:'assets/e13.jpg',
      secimg:10,
      quantity:10,
      title:'Electronic 13',
      price:212.00
    },
  ]
}
