import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [FontAwesomeModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export class ShoesComponent {
  star= faStar;
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
        mainimg:"assets/s1.jpg",
       secimg:"assets/s2.jpg",
      title:'Shoes1',
      price:31.50,
      quantity:10
      },
      {
        id:2,
        mainimg:"assets/s3.jpg",
        secimg:"assets/s4.jpg",
      title:'Shoes 2',
      price:20.00,
      quantity:10
      },
      {
        id:3,
        mainimg:"assets/s5.jpg",
        secimg:"assets/s6.jpg",
      title:'Shoes 3',
      price:27.55,
      quantity:10
      },
      {
        id:4,
        mainimg:"assets/s7.jpg",
        secimg:"assets/s8.jpg",
      title:'Shoes 4',
      price:19.60,
      quantity:10
      },
      
    ]
    content1=true;
    content2=true;
    content3=true;
    content4=true;
    previous=faLessThan
    next= faGreaterThan
    togglecontent1(){
      this.content1 = !this.content1
}
    togglecontent2(){
      this.content2 = !this.content2
}
    togglecontent3(){
      this.content3 = !this.content3
}
    togglecontent4(){
      this.content4 = !this.content4
}
}
