import { Component } from '@angular/core';

@Component({
  selector: 'app-be-ambassador',
  templateUrl: './be-ambassador.component.html',
  styleUrls: ['./be-ambassador.component.css']
})
export class BeAmbassadorComponent {
  selectedType: string = '';

  onDropdownItemClick(selectedValue: string): void {
    this.selectedType = selectedValue;
  }
}
