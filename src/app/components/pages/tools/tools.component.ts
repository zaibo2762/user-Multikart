import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBullhorn, faCartShopping, faClock, faCodeCompare, faGreaterThan, faHeart, faLessThan, faMagnifyingGlass, faStar, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink,RouterOutlet],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
  truck= faTruck;
  clock = faClock;
  horn = faBullhorn;
  star= faStar;
  cart =faCartShopping;
    search=faMagnifyingGlass;
    heart= faHeart;
    compare= faCodeCompare;
    previous=faLessThan
    next= faGreaterThan
    Tools= [
      {
        id:1,
        
        img:"assets/tools1.jpg",
        title:"Auto Parts",
        sub1:"Shock Resistent Parts",
        sub2:"Skeleton PArts",
        sub3:"Slow Parts",
        sub4:"Solar Power Parts",
        
      },
      {
        id:2,
        
        img:"assets/tools2.jpg",
        title:"Brakes & Steering",
        sub1:"Shock Resistent Parts",
        sub2:"Skeleton PArts",
        sub3:"Slow Parts",
        sub4:"Solar Power Parts",
        
      },
      {
        id:3,
        
        img:"assets/tools3.jpg",
        title:"Engine & Drivetrain",
        sub1:"Shock Resistent Parts",
        sub2:"Skeleton PArts",
        sub3:"Slow Parts",
        sub4:"Solar Power Parts",
       
      },
      {
        id:4,
        
        img:"assets/tools4.jpg",
        title:"Exterior Accesories",
        sub1:"Shock Resistent Parts",
        sub2:"Skeleton PArts",
        sub3:"Slow Parts",
        sub4:"Solar Power Parts",
        
      },
    ]
    Parts= [
      {
        id:1,
        img:"assets/t1.jpg",
        title:"Wheel Bearing",
        price:"$450.00"
      },
      {
        id:2,
        img:"assets/t2.jpg",
        title:"Cable Clutch",
        price:"$420.00"
      },
      {
        id:3,
        img:"assets/t3.jpg",
        title:"Cap Wheel",
        price:"$532.00"
      },
      {
        id:4,
        img:"assets/t4.jpg",
        title:"Suspensions",
        price:"$408.00"
      },
    ]
    content1=true
    
    togglecontent(){
          this.content1 = !this.content1
    }

}
