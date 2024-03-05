import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../interfaces/product';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-s-newarrival',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './s-newarrival.component.html',
  styleUrl: './s-newarrival.component.css'
})
export class SNewarrivalComponent {
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
      mainimg:'assets/s5.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 5',
      price:301.00
    },
    {
      id:2,
      mainimg:'assets/s6.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 6',
      price:216.60
    },
    {
      id:3,
      mainimg:'assets/s7.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 7',
      price:170.00
    },
    {
      id:4,
      mainimg:'assets/s8.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 8',
      price:346.50
    },
    
  ]
}
