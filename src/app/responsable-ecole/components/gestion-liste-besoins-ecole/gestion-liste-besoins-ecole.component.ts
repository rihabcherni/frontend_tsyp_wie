import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthServicesService } from 'src/app/auth/services/auth-services.service';
import { GestionSchoolService } from 'src/app/services/SchoolManagement/gestion-school.service';

@Component({
  selector: 'app-gestion-liste-besoins-ecole',
  templateUrl: './gestion-liste-besoins-ecole.component.html',
  styleUrls: ['./gestion-liste-besoins-ecole.component.css']
})
export class GestionListeBesoinsEcoleComponent {
  constructor(private schoolService: GestionSchoolService,private authService: AuthServicesService, private datePipe: DatePipe) { }
  school: any={name:"", address:"",governorate:"",niveau:"",nbr_student:"",nbr_teachers:"",nbr_classes:"", needs:"", type_needs:"", DetailsNeeds:""};
  getSchoolDetails(): void {
    const id = this.authService.getSchoolId() || "";
    this.schoolService.getSchoolDetails(id).subscribe(
      (data: any) => {
        console.log("Response from API:", data);
        this.school = data;
      },
      (error: any) => {
        console.error('Error fetching schools:', error);
      }
    );
  }
  newSchool: any;
  ngOnInit(): void {
    this.getSchoolDetails();
    this.newSchool = {
      _id: this.authService.getSchoolId() || "",
      DetailsNeeds: this.school.DetailsNeeds || { items: [] }
    };
  }
  updateSchool(): void {
    const id = this.authService.getSchoolId() || "";
    this.schoolService.updateSchool(id, this.newSchool).subscribe(
      (response: any) => {
        console.log('School mis à jour avec succès :', response);
        this.authService.setUser(this.newSchool);
        alert("Your school update successfuly");
      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour du school :', error);

      }
    );
  }

  typeNeeds: string = '';
  quantity: string = '';
  addItemsSchool(_id: string, type: string, quantity: string): void {
    this.typeNeeds = type;
    this.quantity = quantity;

    this.newSchool.DetailsNeeds = this.school.DetailsNeeds.map((details:any) => {
      if (details._id === _id) {
        if (!details.items) {
          details.items = [];
        }
        details.items.push({ type: this.typeNeeds, number: this.quantity });
        const schoolId = this.authService.getSchoolId() || "";
        this.schoolService.updateSchool(schoolId, this.school).subscribe(
          (response: any) => {
            console.log('School mis à jour avec succès :', response);
            this.authService.setUser(this.school);
            alert("Your school updated successfully");
          },
          (error: any) => {
            console.error('Erreur lors de la mise à jour du school :', error);
          }
        );
      }

      return details;
    });

    this.openDetailsModal();
  }

  clearInputFields(): void {
    this.typeNeeds = '';
    this.quantity = '';
  }
  openDetailsModal(): void {
    const modal = document.getElementById('modalAdd');
    if (modal) {
      modal.style.display = 'flex';
    }
  }
  onNoClick(): void {
    const modal = document.getElementById('modalAdd');
    if (modal) {
      modal.style.display = 'none';
    }
    this.clearInputFields();
  }
}
