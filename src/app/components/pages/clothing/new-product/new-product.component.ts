import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  star = faStar;
cart =faCartShopping;
search=faMagnifyingGlass;
heart= faHeart;
compare= faCodeCompare;
  list = [
    {
      id:1,
      mainimg:"assets/i1.jpg",
     
    title:'Trim Dresses',
    price:"$87.00"
    },
    {
      id:2,
      mainimg:"assets/i4.jpg",
     
    title:'Belted Dresses',
    price:"$111.00"
    },
    {
      id:3,
      mainimg:"assets/i8.jpg",
      
    title:'Fitted Dresses',
    price:"$104.00"
    },
    {
      id:4,
      mainimg:"assets/i10.jpg",
      
    title:'Fitted Dresses',
    price:"$104.00"
    },
    {
      id:1,
      mainimg:"assets/i1.jpg",
      
    title:'Trim Dresses',
    price:"$87.00"
    },
    {
      id:2,
      mainimg:"assets/i4.jpg",
      
    title:'Belted Dresses',
    price:"$111.00"
    },
    {
      id:3,
      mainimg:"assets/i8.jpg",
      
    title:'Fitted Dresses',
    price:"$104.00"
    },
    {
      id:4,
      mainimg:"assets/i10.jpg",
    title:'Fitted Dresses',
    price:"$104.00"
    },
  ]
}
