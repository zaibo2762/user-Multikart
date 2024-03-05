import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../interfaces/product';
@Component({
  selector: 'app-w-new-arrival',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './w-new-arrival.component.html',
  styleUrl: './w-new-arrival.component.css'
})
export class WNewArrivalComponent {
  star = faStar;
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
        mainimg:"assets/w1.jpg",
       secimg:10,
      title:'Watch 1',
      price:87.00,
      quantity:10
      },
      {
        id:2,
        mainimg:"assets/w2.jpg",
        secimg:10,
      title:'Watch 2',
      price:111.00,
      quantity:10
      },
      {
        id:3,
        mainimg:"assets/w3.jpg",
        secimg:10,
      title:'Watch 3',
      price:104.00,
      quantity:10
      },
      {
        id:4,
        mainimg:"assets/w4.jpg",
        secimg:10,
      title:'Watch 4',
      price:104.00,
      quantity:10
      },
      {
        id:5,
        mainimg:"assets/w5.jpg",
        secimg:10,
      title:'Watch 5',
      price:87.00,
      quantity:10
      },
      {
        id:6,
        mainimg:"assets/w6.jpg",
        secimg:10,
      title:'Watch 17',
      price:111.00,
      quantity:10
      },
      {
        id:7,
        mainimg:"assets/w7.jpg",
        secimg:10,
      title:'Watch 7',
      price:104.00,
      quantity:10
      },
      {
        id:8,
        mainimg:"assets/w8.jpg",
        secimg:10,
      title:'Watch 18',
      price:104.00,
      quantity:10
      },
    ]
}
