import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBullhorn,
  faCartShopping,
  faClock,
  faCodeCompare,
  faHeart,
  faSearch,
  faStar,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.css',
})
export class BeautyComponent {
  truck = faTruck;
  clock = faClock;
  horn = faBullhorn;
  star = faStar;
  cart = faCartShopping;
  search = faSearch;
  heart = faHeart;
  compare = faCodeCompare;
  beauty = [
    {
      id: 1,
      imgurl: 'assets/buty1.jpg',
      name: 'Foundation',
      price: '$202.50',
    },
    {
      id: 2,
      imgurl: 'assets/buty2.jpg',
      name: 'Bronzer',
      price: '$135.00',
    },
    {
      id: 3,
      imgurl: 'assets/buty3.jpg',
      name: 'Face Primer',
      price: '$280.80',
    },
    {
      id: 4,
      imgurl: 'assets/buty4.jpg',
      name: 'Concealer',
      price: '$104.00',
    },
  ];
  constructor(private sanitizer: DomSanitizer) {}
  youtubeUrl = 'https://youtu.be/3ITum6Gb53s?si=vethPyQXVYCp-jLd';
  safeURL: SafeResourceUrl | undefined;

  ngOnInit() {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.youtubeUrl
    );
  }
}
