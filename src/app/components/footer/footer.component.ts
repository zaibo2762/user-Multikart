import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faFax,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  location = faLocationDot;
  phone = faPhone;
  msg = faEnvelope;
  fax = faFax;
}
