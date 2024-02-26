import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck, faClock, faBullhorn, faStar, faCartShopping, faSearch, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

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
pets = [
  {
    id:1,
    imgurl:'assets/pet1.jpg',
    name:'Steel Bowl Puppy',
    price:"$114.00"
  },
  {
    id:2,
    imgurl:'assets/pet2.jpg',
    name:'Calcium Milk Bone',
    price:"$133.00"
  },
  {
    id:3,
    imgurl:'assets/pet3.jpg',
    name:'Dog Sleep Mat',
    price:"$122.40"
  },
  {
    id:4,
    imgurl:'assets/pet4.jpg',
    name:'Dog Super Bone Toy',
    price:"$128.40"
  },
]
}
