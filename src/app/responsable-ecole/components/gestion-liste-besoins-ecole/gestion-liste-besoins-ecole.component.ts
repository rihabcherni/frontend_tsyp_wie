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
  selectedItemsSchool: any[] = [
    {typeNeeds: "pen", quantity: 10},
    {typeNeeds: "book", quantity: 15},
  ];
  selectedItemsClothes: any[] = [
    {typeNeeds: "pen", quantity: 10},
    {typeNeeds: "book", quantity: 15},
  ];
  selectedItemsMoney: any[] = [
    {quantity: 10},
    { quantity: 15},
  ];
  typeNeeds: string = '';
  quantity: string = '';
  addSchool(type: string, quantity: string): void {
    this.typeNeeds = type;
    this.quantity = quantity;
    this.selectedItemsSchool.push({ typeNeeds: this.typeNeeds, quantity: this.quantity });
    this.openDetailsModal();
  }
  addCloths(type: string, quantity: string): void {
    this.typeNeeds = type;
    this.quantity = quantity;
    this.selectedItemsClothes.push({ typeNeeds: this.typeNeeds, quantity: this.quantity });
    this.openDetailsModal();
  }
  addMoney(type: string, quantity: string): void {
    this.typeNeeds = type;
    this.quantity = quantity;
    this.selectedItemsMoney.push({ uantity: this.quantity });
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

  school: any={name:"", address:"",governorate:"",niveau:"",nbr_student:"",nbr_teachers:"",nbr_classes:"", needs:"", type_needs:""};
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
      name: this.school.name,
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
}
