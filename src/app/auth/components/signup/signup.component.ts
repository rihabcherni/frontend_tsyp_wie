import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  selectedType: string = ''; // Initialize with the default value or handle it according to your needs

  onDropdownItemClick(selectedValue: string): void {
    this.selectedType = selectedValue;
  }
}
