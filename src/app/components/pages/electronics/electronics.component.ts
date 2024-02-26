import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
  banners =[
    {
      id:1,
      url:"assets/banner13.jpg",
      title:"SPEAKER",
      per:"10% OFF"
    },
    {
      id:2,
      url:"assets/banner14.jpg",
      title:'EARPLUG',
      per:'10% OFF'
    },
    {
      id:1,
      url:"assets/banner15.jpg",
      title:"BEST DEALS",
      per:" 10% OFF"
    },
  ]

}
