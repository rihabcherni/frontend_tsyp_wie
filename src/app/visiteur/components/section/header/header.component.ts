import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'ng-carousel-demo';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 800,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

    slides = [
      {
        id: "1",
        tiltle:"The Best Kindergarten School For Your Child",
        img: "assets/img/carousel-1.jpg",
        btn1: "Learn More",
        btn2: "Our Classes",
        text:"Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr."
      },
      {
        id: "2",
        tiltle:"The Best Kindergarten School For Your Child",
        img: "assets/img/carousel-2.jpg",
        btn1: "Learn More",
        btn2: "Our Classes",
        text:"Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr."
      },
    ];
}
