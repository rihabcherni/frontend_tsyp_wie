import { Component } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profil-ambassador',
  templateUrl: './profil-ambassador.component.html',
  styleUrls: ['./profil-ambassador.component.css']
})
export class ProfilAmbassadorComponent {
  LastName: string | undefined;
  PhoneNumber: string | undefined;
  EmailAddress: string | undefined;
  FirstName: string | undefined;
  Address: string | undefined;
  Gender: string | undefined;
  Governorate: string | undefined;

  constructor(
    private authService: AuthServicesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser() as {
      firstName: string,
      lastName: string,
      email: string,
      adresse: string,
      gender: string,
      governorate: string,
      phoneNumber: string
    } | null;

    if (user) {
      if ('firstName' in user) {
        this.FirstName = user.firstName;
      } else {
        console.error('User object is missing firstName property');
      }

      if ('lastName' in user) {
        this.LastName = user.lastName;
      } else {
        console.error('User object is missing lastName property');
      }

      if ('email' in user) {
        this.EmailAddress = user.email;
      } else {
        console.error('User object is missing email property');
      }

      if ('adresse' in user) {
        this.Address = user.adresse;
      } else {
        console.error('User object is missing adresse property');
      }

      if ('gender' in user) {
        this.Gender = user.gender;
      } else {
        console.error('User object is missing gender property');
      }

      if ('governorate' in user) {
        this.Governorate = user.governorate;
      } else {
        console.error('User object is missing governorate property');
      }

      if ('phoneNumber' in user) {
        this.PhoneNumber = user.phoneNumber;
      } else {
        console.error('User object is missing phoneNumber property');
      }
    } else {
      console.error('User object is null');
    }
  }
}
