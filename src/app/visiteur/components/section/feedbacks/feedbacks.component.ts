import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent {
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
      400: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  }

    slides = [
      {
        id: "1",
        client:"Client Name",
        img: "assets/img/testimonial-3.jpg",
        profession: "profession",
        text:"Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos"
      },
      {
        id: "2",
        client:"Client Name",
        img: "assets/img/testimonial-3.jpg",
        profession: "profession",
        text:"Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos"
      },
      {
        id: "3",
        client:"Client Name",
        img: "assets/img/testimonial-3.jpg",
        profession: "profession",
        text:"Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos"
      },
      {
        id: "4",
        client:"Client Name",
        img: "assets/img/testimonial-3.jpg",
        profession: "profession",
        text:"Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos"
      },
      {
        id: "5",
        client:"Client Name",
        img: "assets/img/testimonial-3.jpg",
        profession: "profession",
        text:"Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos"
      },
      {
        id: "6",
        client:"Client Name",
        img: "assets/img/testimonial-3.jpg",
        profession: "profession",
        text:"Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos"
      },
    ];
}
