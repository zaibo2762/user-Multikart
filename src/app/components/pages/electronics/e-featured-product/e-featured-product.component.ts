import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faStar } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../interfaces/product';

@Component({
  selector: 'app-e-featured-product',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './e-featured-product.component.html',
  styleUrl: './e-featured-product.component.css'
})
export class EFeaturedProductComponent {
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
      mainimg:'assets/e3.jpg',
      secimg:10,
      title:'Electronic 3',
      price:301.00,
      quantity:10
    },
    {
      id:2,
      mainimg:'assets/e4.jpg',
      secimg:10,
      title:'Electronic 4',
      price:216.60,
      quantity:10
    },
    {
      id:3,
      mainimg:'assets/e5.jpg',
      secimg:10,
      title:'Electronic 5',
      price:170.00,
      quantity:10
    },
    {
      id:4,
      mainimg:'assets/e9.jpg',
      secimg:10,
      title:'Electronic 9',
      price:346.50,
      quantity:10
    },
    {
      id:5,
      mainimg:'assets/e10.jpg',
      secimg:10,
      title:'Electronic 10',
      price:26.00,
      quantity:10
    },
    {
      id:6,
      mainimg:'assets/e11.jpg',
      secimg:10,
      title:'Electronic 11',
      price:111.00,
      quantity:10
    },
    {
      id:7,
      mainimg:'assets/e12.jpg',
      secimg:10,
      title:'Electronic 12',
      price:520.00,
      quantity:10
    },
    {
      id:8,
      mainimg:'assets/e13.jpg',
      secimg:10,
      title:'Electronic 13',
      price:212.00,
      quantity:10
    },
  ]
}
