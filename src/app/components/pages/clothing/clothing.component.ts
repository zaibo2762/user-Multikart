import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare,faTruck,faClock,faBullhorn} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../interfaces/product';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-clothing',
  standalone: true,
  imports: [FontAwesomeModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './clothing.component.html',
  styleUrl: './clothing.component.css'
})


export class ClothingComponent {
star = faStar;
cart =faCartShopping;
search=faMagnifyingGlass;
heart= faHeart;
compare= faCodeCompare;
truck= faTruck
clock=faClock
horn=faBullhorn

  
  products : Product[] = [
    {
      id:1,
      mainimg:"assets/i1.jpg",
      secimg:[
      { src: 'assets/i1.jpg', alt: 'Thumbnail 1',  },
      { src: 'assets/i2.jpg', alt: 'Thumbnail 2',  },
      { src: 'assets/i3.jpg', alt: 'Thumbnail 3',  },
    ],
    title:'Trim Dresses',
    price:87.00,
    quantity:34
    },
    {
      id:2,
      mainimg:"assets/i4.jpg",
      secimg:[
      { src: 'assets/i4.jpg', alt: 'Thumbnail 4',  },
      { src: 'assets/i5.jpg', alt: 'Thumbnail 5',  },
      { src: 'assets/i6.jpg', alt: 'Thumbnail 6',  },
      { src: 'assets/i7.jpg', alt: 'Thumbnail 7',  },
    ],
    title:'Belted Dresses',
    price:111.00,
    quantity:30
    },
    {
      id:3,
      mainimg:"assets/i8.jpg",
      secimg:[
      { src: 'assets/i8.jpg', alt: 'Thumbnail 8',  },
      { src: 'assets/i9.jpg', alt: 'Thumbnail 9',  },
      
    ],
    title:'Fitted Dresses',
    price:104.00,
    quantity:23
    },
    {
      id:4,
      mainimg:"assets/i10.jpg",
      secimg:[
      { src: 'assets/i10.jpg', alt: 'Thumbnail 10',  },
      { src: 'assets/i11.jpg', alt: 'Thumbnail 11',  },
      
    ],
    title:'Fitted Dresses',
    price:104.00,
    quantity:45
    },
  ]
  changeMainImage(item: Product, newMainImage: string): void {
    
    item.mainimg = newMainImage;
  }
  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
