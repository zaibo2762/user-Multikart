import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faCannabis } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../interfaces/product';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-m-bestseller',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './m-bestseller.component.html',
  styleUrl: './m-bestseller.component.css'
})
export class MBestsellerComponent {
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
    products:Product[] =  [
      {
        id:1,
        mainimg:"assets/m4.jpg",
       secimg:10,
       quantity:10,
      title:'Tincture',
      price:31.50
      },
      {
        id:2,
        mainimg:"assets/m5.jpg",
        secimg:10,
        quantity:10,
      title:'Indica',
      price:20.00
      },
      {
        id:3,
        mainimg:"assets/m6.jpg",
        secimg:10,
       quantity:10,
      title:'Sativa',
      price:27.55
      },
      
    ]
}
