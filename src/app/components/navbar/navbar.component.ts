import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faAngleDown,
  faSearch,
  faGear,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent  implements OnInit{
  menu = faBars;
  down = faAngleDown;
  search = faSearch;
  setting = faGear;
  cart = faCartShopping;
  cartItemCount = 0;
  cartItems: Product[] =[];
  cartTotal=0;

  
   
  
  constructor(private cartService: CartService,private sidebarService : SidebarService) {
    this.cartService.getCartCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }
  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);
      
    });

    this.cartService.getCartTotal().subscribe(total => {
      this.cartTotal = total;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  Home = [
    {
      name: 'Clothing',
      path: 'clothing',
    },
    {
      name: 'Vegetables',
      path: 'vegetable',
    },
    {
      name: 'Watch',
      path: 'watches',
    },
    {
      name: 'Furniture',
      path: 'furniture',
    },
    {
      name: 'Flower',
      path: 'flower',
    },
    {
      name: 'Beauty',
      path: 'beauty',
    },
    {
      name: 'Electronic',
      path: 'electronic',
    },
    {
      name: 'Pet',
      path: 'pets',
    },
    {
      name: 'Gym',
      path: 'gym',
    },
    {
      name: 'Tools',
      path: 'tools',
    },
    {
      name: 'Shoes',
      path: 'shoes',
    },
    {
      name: 'Bag',
      path: 'bags',
    },
    {
      name: 'Marijuana',
      path: 'marijuana',
    },
  ];
  Shop = [
    {
      name: 'Left Sidebar',
    },
    {
      name: 'Right Sidebar',
    },
    {
      name: 'No Sidebar',
    },
    {
      name: 'Infinite Scroll',
    },
  ];
  Blog = [
    {
      name: 'Left Sidebar',
    },
    {
      name: 'Right Sidebar',
    },
    {
      name: 'No Sidebar',
    },
    {
      name: 'Blog Detail',
    },
  ];
  Product = [
    {
      name: 'Sidebar',
    },
    {
      name: 'Three Olumn',
    },
    {
      name: 'Four Image',
    },
    {
      name: 'Bundle Product',
    },
    {
      name: 'Image Outside',
    },
  ];
  Page = [
    {
      name: 'Account',
    },
    {
      name: 'About Us',
    },
    {
      name: 'Search',
    },
    {
      name: 'Typography',
    },
    {
      name: 'Review',
    },
    {
      name: 'Order Success',
    },
    {
      name: 'Compare',
    },
    {
      name: 'Collection',
    },
    {
      name: 'Lookbook',
    },
    {
      name: '404',
    },
    {
      name: 'Coming soon',
    },
    {
      name: 'FAQ',
    },
  ];
  Portfolio = [
    {
      name: 'Portfolio Grid 2',
    },
    {
      name: 'Portfolio Grid 3',
    },
    {
      name: 'Portfolio Grid 4',
    },
    {
      name: 'Mansory-grid-2',
    },
    {
      name: 'Mansory-grid-3',
    },
    {
      name: 'Mansory-grid-4',
    },
    {
      name: 'Mansory-full-width',
    },
  ];
  Add = [
    {
      name: 'Cart Right',
    },
    {
      name: 'Cart Left',
    },
    {
      name: 'Cart Top',
    },
    {
      name: 'Cart Bottom',
    },
    {
      name: 'CArt Model Pop-up',
    },
  ];
  Theme = [
    {
      name: 'Title',
    },
    {
      name: 'Collection Banner',
    },
    {
      name: 'Home Slider',
    },
    {
      name: 'Category',
    },
    {
      name: 'Service',
    },
  ];
  Prod = [
    {
      name: 'Product Slider',
    },
    {
      name: 'Banner',
    },
    {
      name: 'Product Tabs',
    },
    {
      name: 'Multi Slider',
    },
  ];
  Email = [
    {
      name: 'Order Success',
    },
    {
      name: 'Order Success 2',
    },
    {
      name: 'Email Template 1',
    },
    {
      name: 'Email Template 2',
    },
  ];
  Lan = [
    {
      name: 'English',
    },
    {
      name: 'Urdu',
    },
  ];
  Curr = [
    {
      name: 'Euro',
    },
    {
      name: 'Rupees',
    },
    {
      name: 'Pound',
    },
    {
      name: 'Dollar',
    },
  ];
  
}
