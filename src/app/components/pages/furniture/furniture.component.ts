import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.css'
})
export class FurnitureComponent {
  banners =[
    {
      id:1,
      url:"assets/banner5.jpg",
      title:"SOFA",
      per:"SAVE 50%OFF"
    },
    {
      id:2,
      url:"assets/banner6.jpg",
      title:'BEAN BAG',
      per:'SAVE 50%OFF'
    },
    {
      id:1,
      url:"assets/banner7.jpg",
      title:"CHAIR",
      per:"SAVE 50%OFF"
    },
  ]
}
