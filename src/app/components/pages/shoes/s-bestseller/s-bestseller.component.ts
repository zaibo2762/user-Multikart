import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../interfaces/product';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-s-bestseller',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './s-bestseller.component.html',
  styleUrl: './s-bestseller.component.css'
})
export class SBestsellerComponent {
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
      mainimg:'assets/s1.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 1',
      price:301.00
    },
    {
      id:2,
      mainimg:'assets/s2.jpg',
      title:'Shoes 2',
      secimg:10,
      quantity:10,
      price:216.60
    },
    {
      id:3,
      mainimg:'assets/s3.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 3',
      price:170.00
    },
    {
      id:4,
      mainimg:'assets/s4.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 4',
      price:346.50
    },
    
  ]
}
