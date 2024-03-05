import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-gym',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './gym.component.html',
  styleUrl: './gym.component.css'
})
export class GymComponent {
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
        mainimg:"assets/g1.jpg",
       secimg:10,
       quantity:10,
      title:'Whey Protein',
      price:135.00
      },
      {
        id:2,
        mainimg:"assets/g2.jpg",
        secimg:10,
        quantity:10,
      title:'Micellar Casein',
      price:154.00
      },
      {
        id:3,
        mainimg:"assets/g3.jpg",
        secimg:10,
       quantity:10,
      title:'Impact Isolate',
      price:94.00
      },
      {
        id:4,
        mainimg:"assets/g4.jpg",
        secimg:10,
       quantity:10,
      title:'Diet Whey',
      price:234.00
      },
      {
        id:5,
        mainimg:"assets/g5.jpg",
        secimg:10,
       quantity:10,
      title:'Peanut Butter',
      price:164.75
      },
      {
        id:6,
        mainimg:"assets/g6.jpg",
        secimg:10,
       quantity:10,
      title:'Impact Diet Whey',
      price:87.30
      },
      {
        id:7,
        mainimg:"assets/g7.jpg",
        secimg:10,
       quantity:10,
      title:'Muscleblaze Gainer',
      price:152.00
      },
      {
        id:8,
        mainimg:"assets/g8.jpg",
        secimg:10,
       quantity:10,
      title:'Protein Powder',
      price:182.75
      },
    ]
    topCollection:Product[]=[
      {
        id:1,
        mainimg:"assets/g1.jpg",
        secimg:10,
        quantity:10,
      title:'Whey Protein',
      price:135.00
      },
      {
        id:2,
        mainimg:"assets/g2.jpg",
        secimg:10,
        quantity:10,
      title:'Micellar Casein',
      price:154.00
      },
      {
        id:3,
        mainimg:"assets/g3.jpg",
        secimg:10,
       quantity:10,
      title:'Impact Isolate',
      price:94.00
      },
      {
        id:4,
        mainimg:"assets/g4.jpg",
        secimg:10,
       quantity:10,
      title:'Diet Whey',
      price:234.00
      },
    ]
}
