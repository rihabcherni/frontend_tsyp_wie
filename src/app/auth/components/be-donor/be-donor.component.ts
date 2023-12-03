import { Component } from '@angular/core';

@Component({
  selector: 'app-be-donor',
  templateUrl: './be-donor.component.html',
  styleUrls: ['./be-donor.component.css']
})
export class BeDonorComponent {
  selectedType: string = ''; // Initialize with the default value or handle it according to your needs

  onDropdownItemClick(selectedValue: string): void {
    this.selectedType = selectedValue;
  }
}
