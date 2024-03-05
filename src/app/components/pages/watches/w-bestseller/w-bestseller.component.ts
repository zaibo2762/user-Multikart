import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../interfaces/product';
@Component({
  selector: 'app-w-bestseller',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './w-bestseller.component.html',
  styleUrl: './w-bestseller.component.css'
})
export class WBestsellerComponent {
  star = faStar;
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  products:Product[] =  [
      {
        id:1,
        mainimg:"assets/w9.jpg",
       secimg:10,
      title:'Watch 1',
      price:87.00,
      quantity:12
      },
      {
        id:2,
        mainimg:"assets/w10.jpg",
        secimg:10,
      title:'Watch 2',
      price:111.00,
      quantity:12
      },
      {
        id:3,
        mainimg:"assets/w11.jpg",
        secimg:10,
      title:'Watch 3',
      price:104.00,
      quantity:12
      },
      {
        id:4,
        mainimg:"assets/w12.jpg",
        secimg:10,
      title:'Watch 4',
      price:104.00,
      quantity:12
      },
      {
        id:5,
        mainimg:"assets/w13.jpg",
        secimg:10,
      title:'Watch 5',
      price:87.00,
      quantity:12      },
      {
        id:6,
        mainimg:"assets/w14.jpg",
        secimg:10,
      title:'Watch 17',
      price:111.00,
      quantity:12
      },
      {
        id:7,
        mainimg:"assets/w15.jpg",
        secimg:10,
      title:'Watch 7',
      price:104.00,
      quantity:12
      },
      {
        id:8,
        mainimg:"assets/w16.jpg",
        secimg:10,
      title:'Watch 18',
      price:104.00,
      quantity:12
      },
    ]
}
