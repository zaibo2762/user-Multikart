import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faBars,faAngleDown, faSearch, faGear, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
menu = faBars;
down = faAngleDown;
search= faSearch;
setting = faGear;
cart = faCartShopping;
constructor(private sidebarService: SidebarService){}
toggleSidebar() {
  this.sidebarService.toggleSidebar();
}
Home = [
  {
    name:'Clothing',
    path:"clothing"
  },
  {
    name:'Vegetables',
    path:"clothing"
  },
  {
    name:'Watch',
    path:"clothing"
  },
  {
    name:'Furniture',
    path:"clothing"
  },
  {
    name:'Flower',
    path:"clothing"
  },
  {
    name:'Beauty',
    path:"clothing"
  },
  {
    name:'Electronic',
    path:"clothing"
  },
  {
    name:'Pet',
    path:"clothing"
  },
  {
    name:'Gym',
    path:"clothing"
  },
  {
    name:'Tools',
    path:"clothing"
  },
  {
    name:'Shoes',
    path:"clothing"
  },
  {
    name:'Bag',
    path:"clothing"
  },
  {
    name:'Marijuana',
    path:"clothing"
  },
 
]
Shop = [
  {
    name:'Left Sidebar'
  },
  {
    name:'Right Sidebar'
  },
  {
    name:'No Sidebar'
  },
  {
    name:'Infinite Scroll'
  },
]
Blog = [
  {
    name:'Left Sidebar'
  },
  {
    name:'Right Sidebar'
  },
  {
    name:'No Sidebar'
  },
  {
    name:'Blog Detail'
  },
]
Product = [
  {
    name:'Sidebar'
  },
  {
    name:'Three Olumn'
  },
  {
    name:'Four Image'
  },
  {
    name:'Bundle Product'
  },
  {
    name:'Image Outside'
  },
]
Page = [
  {
    name:'Account'
  },
  {
    name:'About Us'
  },
  {
    name:'Search'
  },
  {
    name:'Typography'
  },
  {
    name:'Review'
  },
  {
    name:'Order Success'
  },
  {
    name:'Compare'
  },
  {
    name:'Collection'
  },
  {
    name:'Lookbook'
  },
  {
    name:'404'
  },
  {
    name:'Coming soon'
  },
  {
    name:'FAQ'
  },
  
 
]
Portfolio = [
  {
    name:'Portfolio Grid 2'
  },
  {
    name:'Portfolio Grid 3'
  },
  {
    name:'Portfolio Grid 4'
  },
  {
    name:'Mansory-grid-2'
  },
  {
    name:'Mansory-grid-3'
  },
  {
    name:'Mansory-grid-4'
  },
  {
    name:'Mansory-full-width'
  },
]
Add = [
  {
    name:'Cart Right'
  },
  {
    name:'Cart Left'
  },
  {
    name:'Cart Top'
  },
  {
    name:'Cart Bottom'
  },
  {
    name:'CArt Model Pop-up'
  },
]
Theme = [
  {
    name:'Title'
  },
  {
    name:'Collection Banner'
  },
  {
    name:'Home Slider'
  },
  {
    name:'Category'
  },
  {
    name:'Service'
  },
]
Prod = [
  {
    name:'Product Slider'
  },
  {
    name:'Banner'
  },
  {
    name:'Product Tabs'
  },
  {
    name:'Multi Slider'
  },
]
Email = [
  {
    name:'Order Success'
  },
  {
    name:'Order Success 2'
  },
  {
    name:'Email Template 1'
  },
  {
    name:'Email Template 2'
  },
]
Lan = [
  {
    name:'English'
  },
  {
    name:'Urdu'
  },
]
Curr = [
  {
    name:'Euro'
  },
  {
    name:'Rupees'
  },
  {
    name:'Pound'
  },
  {
    name:'Dollar'
  },
]
}
