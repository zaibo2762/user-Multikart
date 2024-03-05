import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faCodeCompare, faHeart, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../interfaces/product';
@Component({
  selector: 'app-e-bestseller',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './e-bestseller.component.html',
  styleUrl: './e-bestseller.component.css'
})
export class EBestsellerComponent {
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
      mainimg:'assets/e1.jpg',
      secimg:10,
      title:'Electronic 1',
      price:301.00,
      quantity:10
    },
    {
      id:2,
      mainimg:'assets/e2.jpg',
      secimg:10,
      title:'Electronic 2',
      price:216.60,
      quantity:10
    },
    {
      id:3,
      mainimg:'assets/e3.jpg',
      secimg:10,
      title:'Electronic 3',
      price:170.00,
      quantity:10
    },
    {
      id:4,
      mainimg:'assets/e4.jpg',
      secimg:10,
      title:'Electronic 4',
      price:346.50,
      quantity:10
    },
    {
      id:5,
      mainimg:'assets/e5.jpg',
      secimg:10,
      title:'Electronic 5',
      price:26.00,
      quantity:10
    },
    {
      id:6,
      mainimg:'assets/e6.jpg',
      secimg:10,
      title:'Electronic 6',
      price:111.00,
      quantity:10
    },
    {
      id:7,
      mainimg:'assets/e7.jpg',
      secimg:10,
      title:'Electronic 7',
      price:520.00,
      quantity:10
    },
    {
      id:8,
      mainimg:'assets/e8.jpg',
      secimg:10,
      title:'Electronic 8',
      price:212.00,
      quantity:10
    },
  ]
}
