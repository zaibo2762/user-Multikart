import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBullhorn,
  faCartShopping,
  faClock,
  faCodeCompare,
  faHeart,
  faSearch,
  faStar,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../interfaces/product';
@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.css',
})
export class BeautyComponent {
  truck = faTruck;
  clock = faClock;
  horn = faBullhorn;
  star = faStar;
  cart = faCartShopping;
  search = faSearch;
  heart = faHeart;
  compare = faCodeCompare;
  products:Product[] = [
    {
      id: 1,
      mainimg: 'assets/buty1.jpg',
      secimg:10,
      title: 'Foundation',
      price: 202.50,
      quantity:10
    },
    {
      id: 2,
      mainimg: 'assets/buty2.jpg',
      secimg:10,
      title: 'Bronzer',
      price: 135.00,
      quantity:10
    },
    {
      id: 3,
      mainimg: 'assets/buty3.jpg',
      secimg:10,
      title: 'Face Primer',
      price: 280.80,
      quantity:10
    },
    {
      id: 4,
      mainimg: 'assets/buty4.jpg',
      secimg:10,
      title: 'Concealer',
      price: 104.00,
      quantity:10
    },
  ];
  constructor(private sanitizer: DomSanitizer , private cartService: CartService) {}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  youtubeUrl = 'https://youtu.be/3ITum6Gb53s?si=vethPyQXVYCp-jLd';
  safeURL: SafeResourceUrl | undefined;

  ngOnInit() {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.youtubeUrl
    );
  }
}
