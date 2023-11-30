import { Component } from '@angular/core';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.css']
})
export class CausesComponent {
  causes = [
    {
      id: "1",
      school:"École primaire Habib Bourguiba à Kairouan",
      img: "assets/img/visiteur/s1.jfif",
      moreInfo: "More Info",
      adresse:"Rue El Hanchi, Kairouan 8100, Tunisie",
      besoin:["Matériel scolaire", "fournitures informatiques", "rénovation des locaux"],
      class:"20",
      teacher:"25",
      student:"500",
      ambassador:"Jhon Doe",
      ambassadorRole:"Teacher"
    },
    {
      id: "2",
      school:"École primaire Ibn Khaldoun à Sfax",
      img: "assets/img/testimonial-3.jpg",
      moreInfo: "More Info",
      adresse:"",
      besoin:"",
    },
    {
      id: "3",
      school:"school Name",
      img: "assets/img/testimonial-3.jpg",
      moreInfo: "More Info",
      adresse:"",
      besoin:"",
    },
    {
      id: "4",
      school:"school Name",
      img: "assets/img/testimonial-3.jpg",
      moreInfo: "More Info",
      adresse:"",
      besoin:"",
    },
    {
      id: "5",
      school:"school Name",
      img: "assets/img/testimonial-3.jpg",
      moreInfo: "More Info",
      adresse:"",
      besoin:"",
    },
    {
      id: "6",
      school:"school Name",
      img: "assets/img/testimonial-3.jpg",
      moreInfo: "More Info",
      adresse:"",
      besoin:"",
    },
  ];
}
