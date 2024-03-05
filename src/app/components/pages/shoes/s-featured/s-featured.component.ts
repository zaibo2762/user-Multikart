import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../interfaces/product';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-s-featured',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './s-featured.component.html',
  styleUrl: './s-featured.component.css'
})
export class SFeaturedComponent {
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
      mainimg:'assets/s13.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 13',
      price:301.00
    },
    {
      id:2,
      mainimg:'assets/s14.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 14',
      price:216.60
    },
    {
      id:3,
      mainimg:'assets/s15.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 15',
      price:170.00
    },
    {
      id:4,
      mainimg:'assets/s16.jpg',
      secimg:10,
      quantity:10,
      title:'Shoes 16',
      price:346.50
    },
    
  ]
}
