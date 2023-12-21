import { Component, Input } from '@angular/core';
import { GestionSchoolService } from '../../../services/SchoolManagement/gestion-school.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gestion-ecole',
  templateUrl: './gestion-ecole.component.html',
  styleUrls: ['./gestion-ecole.component.css']
})
export class GestionEcoleComponent {
  school: any[] = [];
  demande: any[] = [];
  constructor(private schoolService: GestionSchoolService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllSchool();
    this.getAllSchoolsDemande();
  }

  getAllSchool(): void {
    this.schoolService.getAllSchool().subscribe(
      (data: any) => {
        const formattedSchools = data.schoolsWithAmbassadors.map((schoolWithAmbassadors: any) => {
          const formattedAmbassadors = schoolWithAmbassadors.ambassadors.map((ambassador: any) => {
            return { ...ambassador, /* Ajoutez ici d'autres propriétés si nécessaire */ };
          });

          return {
            ...schoolWithAmbassadors.school,
            dateConfirmation: this.formatDate(schoolWithAmbassadors.school.dateConfirmation),
            ambassadors: formattedAmbassadors,
          };
        });

        this.school = formattedSchools;
        console.log('schools with ambassadors:', formattedSchools);
      },
      (error: any) => {
        console.error('Error fetching schools:', error);
      }
    );
  }

  getAllSchoolsDemande(): void {
    this.schoolService.getAllSchoolsDemande().subscribe(
      (data: any) => {
        const formattedSchools = data.schoolsWithAmbassadors.map((schoolWithAmbassadors: any) => {
          const formattedAmbassadors = schoolWithAmbassadors.ambassadors.map((ambassador: any) => {
            return { ...ambassador};
          });
          return {
            ...schoolWithAmbassadors.school,
            dateConfirmation: this.formatDate(schoolWithAmbassadors.school.dateConfirmation),
            ambassadors: formattedAmbassadors,
          };
        });

        this.demande = formattedSchools;
        console.log('schools with ambassadors:', formattedSchools);
      },
      (error: any) => {
        console.error('Error fetching schools:', error);
      }
    );
  }
  private formatDate(date: string): string {
    return this.datePipe.transform(new Date(date), 'dd-MM-yyyy HH:mm') || '';
  }
  deleteSchool(id: string): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this school?');

    if (isConfirmed) {
      this.schoolService.deleteSchool(id).subscribe(
        () => {
          console.log(`school with ID ${id} deleted successfully`);
          alert('school deleted successfully');
          this.getAllSchool();
        },
        (error: any) => {
          console.error(`Error deleting school with ID ${id}:`, error);
          alert(`Error deleting school with ID ${id}`);
        }
      );
    }
  }

  selectedSchool: any;
  onNoClick(): void {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  openDetailsDialog(): void {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'flex';
    }
  }
  openDetailsModal(school: any): void {
    this.selectedSchool = school;
    this.openDetailsDialog();
  }
}
