import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../interfaces/product';
@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  star = faStar;
cart =faCartShopping;
search=faMagnifyingGlass;
heart= faHeart;
compare= faCodeCompare;
  products : Product[] = [
    {
      id:1,
      mainimg:"assets/i1.jpg",
     secimg:10,
    title:'Trim Dresses',
    price:87.00,
    quantity:32
    },
    {
      id:2,
      mainimg:"assets/i4.jpg",
      secimg:10,
    title:'Belted Dresses',
    price:111.00,
    quantity:32
    },
    {
      id:3,
      mainimg:"assets/i8.jpg",
      secimg:10,
    title:'Fitted Dresses',
    price:104.00,
    quantity:34
    },
    {
      id:4,
      mainimg:"assets/i10.jpg",
      secimg:10,
    title:'Fitted Dresses',
    price:104.00,
    quantity:34
    },
    {
      id:5,
      mainimg:"assets/i1.jpg",
      secimg:10,
    title:'Trim Dresses',
    price:87.00,
    quantity:34
    },
    {
      id:6,
      mainimg:"assets/i4.jpg",
      secimg:10,
    title:'Belted Dresses',
    price:111.00,
    quantity:34
    },
    {
      id:7,
      mainimg:"assets/i8.jpg",
      secimg:10,
    title:'Fitted Dresses',
    price:104.00,
    quantity:34
    },
    {
      id:8,
      mainimg:"assets/i10.jpg",
      secimg:10,
    title:'Fitted Dresses',
    price:104.00,
    quantity:34
    },
  ]
  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
