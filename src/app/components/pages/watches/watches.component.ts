import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar,faCartShopping,faMagnifyingGlass,faHeart,faCodeCompare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-watches',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FontAwesomeModule],
  templateUrl: './watches.component.html',
  styleUrl: './watches.component.css'
})
export class WatchesComponent {
  star = faStar;
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
watches= [
  {
    id:1,
    name:"Watch 1",
    img:"assets/w1.png",
    title:"WATCH MODELS",
    sub1:"D1 Milano",
    sub2:"Damaskeening",
    sub3:"Diving Watch",
    sub4:"Dollar Watch",
    price:"$156.00"
  },
  {
    id:2,
    name:"Watch 2",
    img:"assets/w2.png",
    title:"CALCULATOR WATCH",
    sub1:"Shock Resistent Watch",
    sub2:"Skeleton Watch",
    sub3:"Slow Watch",
    sub4:"Solar Power Watch",
    price:"$207.00"
  },
  {
    id:3,
    name:"Watch 3",
    img:"assets/w3.png",
    title:"ANTIMAGNETIC WATCH",
    sub1:"Watchmaking Colgomerates",
    sub2:"Breitling SA",
    sub3:"Casio Watches",
    sub4:"Citizen Watch",
    price:"$356.00"
  },
  {
    id:4,
    name:"Watch 4",
    img:"assets/w4.png",
    title:"HISTORY OF WATCHES",
    sub1:"Manufacture Dhorlogreis",
    sub2:"Mechanical Watch",
    sub3:"Microband Watches",
    sub4:"MIL-W-46374",
    price:"$496.00"
  },
]
banners =[
  {
    id:1,
    url:"assets/wb1.jpg",
    title:"MENS WATCH",
    per:"MINIMUM 10% OFF"
  },
  {
    id:2,
    url:"assets/wb2.jpg",
    
  },
  {
    id:1,
    url:"assets/wb3.jpg",
    title:"GOLD WATCH",
    per:"MINIMUM 10% OFF"
  },
]
}
