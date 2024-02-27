import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faCartShopping, faMagnifyingGlass, faHeart, faCodeCompare, faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export class ShoesComponent {
  star= faStar;
  cart =faCartShopping;
    search=faMagnifyingGlass;
    heart= faHeart;
    compare= faCodeCompare;
    shoes = [
      {
        id:1,
        mainimg:"assets/s1.jpg",
       simg:"assets/s2.jpg",
      title:'Shoes1',
      price:"$31.50"
      },
      {
        id:2,
        mainimg:"assets/s3.jpg",
        simg:"assets/s4.jpg",
      title:'Shoes 2',
      price:"$20.00"
      },
      {
        id:3,
        mainimg:"assets/s5.jpg",
        simg:"assets/s6.jpg",
      title:'Shoes 3',
      price:"$27.55"
      },
      {
        id:4,
        mainimg:"assets/s7.jpg",
        simg:"assets/s8.jpg",
      title:'Shoes 4',
      price:"$19.60"
      },
      
    ]
    content1=true;
    content2=true;
    content3=true;
    content4=true;
    previous=faLessThan
    next= faGreaterThan
    togglecontent1(){
      this.content1 = !this.content1
}
    togglecontent2(){
      this.content2 = !this.content2
}
    togglecontent3(){
      this.content3 = !this.content3
}
    togglecontent4(){
      this.content4 = !this.content4
}
}
