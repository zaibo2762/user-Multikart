import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
menu = faBars;
constructor(private sidebarService: SidebarService){}
toggleSidebar() {
  this.sidebarService.toggleSidebar();
}
Home = [
  {
    name:'Clothing'
  },
  {
    name:'Vegetables'
  },
  {
    name:'Watch'
  },
  {
    name:'Furniture'
  },
  {
    name:'Flower'
  },
  {
    name:'Beauty'
  },
  {
    name:'Electronic'
  },
  {
    name:'Pet'
  },
  {
    name:'Gym'
  },
  {
    name:'Tools'
  },
  {
    name:'Shoes'
  },
  {
    name:'Bag'
  },
  {
    name:'Marijuana'
  },
 
]
}
