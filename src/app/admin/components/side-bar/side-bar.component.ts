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
    { routerLink: '/admin', iconClass: 'fas fa-tachometer-alt', title: 'Dashboard' },

    { routerLink: '/admin/schools', iconClass: 'fas fa-school', title: 'Schools' },

    { routerLink: '/admin/donation', iconClass:"fas fa-hand-holding-usd" , title: 'Donations' },

    { routerLink: '/admin/users', iconClass: 'fas fa-users-cog', title: 'Donors' },
    { routerLink: '/admin/profil', iconClass: 'fas fa-user-circle', title: 'Profil' },
    { routerLink: '/admin/sign-out', iconClass: 'fas fa-sign-out-alt', title: 'Sign Out' }
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
