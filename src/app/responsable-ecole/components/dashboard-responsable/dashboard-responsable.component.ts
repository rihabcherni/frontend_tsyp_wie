import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SuccessLoginMessageService } from 'src/app/auth/services/success-login-message.service';
import { AdminDashService } from 'src/app/services/dashboard/admin-dash.service';

@Component({
  selector: 'app-dashboard-responsable',
  templateUrl: './dashboard-responsable.component.html',
  styleUrls: ['./dashboard-responsable.component.css']
})
export class DashboardResponsableComponent {
  statistics: any = {};
  schoolStatistics: any = [];
  lastDonation: any = [];
  lastDonor: any = [];
  donationStatistics: any = [];
  successMessage: string = '';
  lineChartData: any = {};

  constructor(private successMessageService: SuccessLoginMessageService,private statisticsService: AdminDashService, private datePipe: DatePipe) {
    this.successMessageService.successMessage$.subscribe((message) => {
      this.successMessage = message;
    });
  }
  ngOnInit() {
    this.getStatistics();
    this.getlastDonationAdmin();
    this.getlastDonorAdmin();
  }


  getStatistics() {
    this.statisticsService.getStatistics().subscribe(
      (data) => {
        this.statistics = data.data;
        console.log(data.data);
      },
      (error) => {
        console.error('Error fetching statistics:', error);
      }
    );
  }
  getlastDonationAdmin() {
    this.statisticsService.getlastDonationAdmin().subscribe(
      (data) => {
        const formattedDonations =(Array.isArray(data) ? data : []).map((donation: any) => {
          return { ...donation, dateDonation: this.formatDate(donation.dateDonation) };
        });
        this.lastDonation = formattedDonations;
        console.log(formattedDonations)
      },
      (error) => {
        console.error('Error fetching statistics:', error);
      }
    );
  }
  getlastDonorAdmin() {
    this.statisticsService.getlastDonorAdmin().subscribe(
      (data) => {
        const formattedDonors =(Array.isArray(data) ? data : []).map((donor: any) => {
          return { ...donor, timeAdded: this.formatDate(donor.timeAdded) };
        });
        this.lastDonor = formattedDonors;
        console.log(formattedDonors)
      },
      (error) => {
        console.error('Error fetching statistics:', error);
      }
    );
  }

  private formatDate(date: string): string {
    return this.datePipe.transform(new Date(date), 'dd-MM-yyyy HH:mm') || '';
  }
}
