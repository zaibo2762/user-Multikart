import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../interfaces/product';
@Component({
  selector: 'app-f-best',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './f-best.component.html',
  styleUrl: './f-best.component.css'
})
export class FBestComponent {
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
        mainimg:"assets/f7.jpg",
       secimg:10,
      title:'Arm Chair',
      price:200.00,
      quantity:10
      },
      {
        id:2,
        mainimg:"assets/f6.jpg",
        secimg:10,
      title:'Oak Finish Chair',
      price:275.00,
      quantity:10
      },
      {
        id:3,
        mainimg:"assets/f3.jpg",
        secimg:10,
      title:'Wooden Chair',
      price:160.00,
      quantity:10
      },
      {
        id:4,
        mainimg:"assets/f1.jpg",
        secimg:10,
      title:'Metal Table Lamp',
      price:240.00,
      quantity:10
      },
      {
        id:5,
        mainimg:"assets/f14.jpg",
        secimg:10,
      title:'Wood End Table',
      price:400.00,
      quantity:10
      },
      {
        id:6,
        mainimg:"assets/f15.jpg",
        secimg:10,
      title:'Lounge Chair',
      price:378.00,
      quantity:10
      },
      {
        id:7,
        mainimg:"assets/f16.jpg",
        secimg:10,
      title:'Rocking Chair',
      price:448.00,
      quantity:10
      },
      {
        id:8,
        mainimg:"assets/f10.jpg",
        secimg:10,
      title:'Barrel Chair',
      price:457.00,
      quantity:10
      },
    ]
}
