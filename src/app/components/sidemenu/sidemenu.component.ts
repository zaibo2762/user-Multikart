import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';
@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent implements OnInit{
arrow = faArrowLeft;
Bags =[
  {
    name:'Shopper Bag'
  },
  {
    name:'Laptop Bag'
  },
  {
    name:'Clutches'
  },
  {
    name:'Purses'
  },
]
Footwear = [
  {
    name:'Sports Shoes'
  },
  {
    name:'Formal Shoes'
  },
  {
    name:'Casual Shoes'
  },
]
Accessories = [
  {
    name:'Fashion Jewellery'
  },
  {
    name:'Caps and Hats'
  },
  {
    name:'Precious Jewellery'
  },
]
Beauty = [
  {
    name:'Make Up'
  },
  {
    name:'Skincare'
  },
  {
    name:'Premium Beauty'
  },
]
isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.isSidebarOpen$.subscribe(isOpen => {
      this.isSidebarOpen = isOpen;
    });
  }

  closeSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
