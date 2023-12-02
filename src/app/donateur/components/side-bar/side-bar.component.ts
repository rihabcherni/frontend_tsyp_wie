import { Component, Renderer2, ElementRef ,OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  sidebarLinks = [
    { routerLink: '/donor', iconClass: 'fas fa-tachometer-alt', title: 'Dashboard' },
    { routerLink: '/donor/History-donations-made', iconClass: 'fas fa-donate', title: 'History donations' },
    { routerLink: '/donor/schools-needs', iconClass: 'fas fa-school', title: 'Schools needs' },
    { routerLink: '/donor/profil', iconClass: 'fas fa-user-circle', title: 'Profil' },
    { routerLink: '/donor/sign-out', iconClass: 'fas fa-sign-out-alt', title: 'Sign Out' }
  ];
  activeLink: string = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url;
      }
    });
  }
  @Input() isSidebarOpen: boolean = true;
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
