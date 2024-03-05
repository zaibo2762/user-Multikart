import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../interfaces/product';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-s-sale',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './s-sale.component.html',
  styleUrl: './s-sale.component.css'
})
export class SSaleComponent {
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
      mainimg:'assets/s9.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 9',
      price:301.00
    },
    {
      id:2,
      mainimg:'assets/s10.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 10',
      price:216.60
    },
    {
      id:3,
      mainimg:'assets/s11.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 11',
      price:170.00
    },
    {
      id:4,
      mainimg:'assets/s12.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 12',
      price:346.50
    },
    
  ]
}
