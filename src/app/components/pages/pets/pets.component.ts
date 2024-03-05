import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck, faClock, faBullhorn, faStar, faCartShopping, faSearch, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
  banners1 =[
    {
      id:1,
      url:"assets/banner16.jpg",
      title:"CLOTHES",
      
    },
    {
      id:2,
      url:"assets/banner17.jpg",
      title:'GROOM',
      
    },
    {
      id:3,
      url:"assets/banner18.jpg",
      title:"FOOD",
      
    },
  ]
  banners2 =[
    {
      id:1,
      url:"assets/banner19.jpg",
      title:"HOME",
      
    },
    {
      id:2,
      url:"assets/banner20.jpg",
      title:'CATS',
      
    },
    {
      id:3,
      url:"assets/banner21.jpg",
      title:"BOWLS",
      
    },
  ]
  truck=faTruck;
clock=faClock;
horn=faBullhorn;
star=faStar;
cart=faCartShopping;
search=faSearch;
heart=faHeart;
compare=faCodeCompare;
constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  products:Product[] = [
  {
    id:1,
    mainimg:'assets/pet1.jpg',
    secimg:10,
    quantity:10,
    title:'Steel Bowl Puppy',
    price:114.00
  },
  {
    id:2,
    mainimg:'assets/pet2.jpg',
    secimg:10,
    quantity:10,
    title:'Calcium Milk Bone',
    price:133.00
  },
  {
    id:3,
    mainimg:'assets/pet3.jpg',
    secimg:10,
    quantity:10,
    title:'Dog Sleep Mat',
    price:122.40
  },
  {
    id:4,
    mainimg:'assets/pet4.jpg',
    secimg:10,
    quantity:10,
    title:'Dog Super Bone Toy',
    price:128.40
  },
]
}
