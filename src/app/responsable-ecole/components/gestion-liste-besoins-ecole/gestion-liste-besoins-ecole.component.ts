import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-liste-besoins-ecole',
  templateUrl: './gestion-liste-besoins-ecole.component.html',
  styleUrls: ['./gestion-liste-besoins-ecole.component.css']
})
export class GestionListeBesoinsEcoleComponent {

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
}
