import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../interfaces/product';
@Component({
  selector: 'app-f-arrival',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './f-arrival.component.html',
  styleUrl: './f-arrival.component.css'
})
export class FArrivalComponent {
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
        mainimg:"assets/f8.jpg",
       secimg:10,
      title:'Arm Chair',
      price:200.00,
      quantity:10
      },
      {
        id:2,
        mainimg:"assets/f4.jpg",
        secimg:10,
      title:'Oak Finish Chair',
      price:275.00,
      quantity:10
      },
      {
        id:3,
        mainimg:"assets/f5.jpg",
        secimg:10,
      title:'Wooden Chair',
      price:160.00,
      quantity:10
      },
      {
        id:4,
        mainimg:"assets/f6.jpg",
        secimg:10,
      title:'Metal Table Lamp',
      price:240.00,
      quantity:10
      },
      {
        id:5,
        mainimg:"assets/f13.jpg",
        secimg:10,
      title:'Wood End Table',
      price:400.00,
      quantity:10
      },
      {
        id:6,
        mainimg:"assets/f11.jpg",
        secimg:10,
      title:'Lounge Chair',
      price:378.00,
      quantity:10
      },
      {
        id:7,
        mainimg:"assets/f10.jpg",
        secimg:10,
      title:'Rocking Chair',
      price:448.00,
      quantity:10
      },
      {
        id:8,
        mainimg:"assets/f9.jpg",
        secimg:10,
      title:'Barrel Chair',
      price:457.00,
      quantity:10
      },
    ]
}
