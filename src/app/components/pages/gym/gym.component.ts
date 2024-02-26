import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gym',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './gym.component.html',
  styleUrl: './gym.component.css'
})
export class GymComponent {
  star = faStar;
  cart =faCartShopping;
  search=faMagnifyingGlass;
  heart= faHeart;
  compare= faCodeCompare;
    gym = [
      {
        id:1,
        mainimg:"assets/g1.jpg",
       
      title:'Whey Protein',
      price:"$135.00"
      },
      {
        id:2,
        mainimg:"assets/g2.jpg",
       
      title:'Micellar Casein',
      price:"$154.00"
      },
      {
        id:3,
        mainimg:"assets/g3.jpg",
        
      title:'Impact Isolate',
      price:"$94.00"
      },
      {
        id:4,
        mainimg:"assets/g4.jpg",
        
      title:'Diet Whey',
      price:"$234.00"
      },
      {
        id:5,
        mainimg:"assets/g5.jpg",
        
      title:'Peanut Butter',
      price:"$164.75"
      },
      {
        id:6,
        mainimg:"assets/g6.jpg",
        
      title:'Impact Diet Whey',
      price:"$87.30"
      },
      {
        id:7,
        mainimg:"assets/g7.jpg",
        
      title:'Muscleblaze Gainer',
      price:"$152.00"
      },
      {
        id:8,
        mainimg:"assets/g8.jpg",
      title:'Protein Powder',
      price:"$182.75"
      },
    ]
    topCollection=[
      {
        id:1,
        mainimg:"assets/g1.jpg",
       
      title:'Whey Protein',
      price:"$135.00"
      },
      {
        id:2,
        mainimg:"assets/g2.jpg",
       
      title:'Micellar Casein',
      price:"$154.00"
      },
      {
        id:3,
        mainimg:"assets/g3.jpg",
        
      title:'Impact Isolate',
      price:"$94.00"
      },
      {
        id:4,
        mainimg:"assets/g4.jpg",
        
      title:'Diet Whey',
      price:"$234.00"
      },
    ]
}
