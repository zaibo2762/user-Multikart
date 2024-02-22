import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-flower-sale',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './flower-sale.component.html',
  styleUrl: './flower-sale.component.css'
})
export class FlowerSaleComponent {
  star = faStar;
  flowers=[
    {
      id:1,
      url:"assets/fl6.jpg",
      title:"Dreamy Love",
      price:"$159.60"
    },
    {
      id:2,
      url:"assets/fl3.jpg",
      title:"Perky Blooms",
      price:"$54.60"
    },
    {
      id:3,
      url:"assets/fl2.jpg",
      title:"Divine Love",
      price:"$52.00"
    },
    {
      id:4,
      url:"assets/fl9.jpg",
      title:"Chrasmatic Elanor",
      price:"$42.60"
    },
    {
      id:5,
      url:"assets/fl13.jpg",
      title:"Orchid N Roses",
      price:"$40.60"
    },
    {
      id:6,
      url:"assets/fl15.jpg",
      title:"Mix Rose Garden",
      price:"$139.60"
    },
    {
      id:7,
      url:"assets/fl13.jpg",
      title:"Vivid memories",
      price:"$26.60"
    },
    {
      id:8,
      url:"assets/fl12.jpg",
      title:"Spectral Bonanza",
      price:"$42.60"
    },
  ]
}
