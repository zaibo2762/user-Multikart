import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBullhorn, faCartShopping, faClock, faCodeCompare, faHeart, faMagnifyingGlass, faStar, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [FontAwesomeModule],
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
}
