import { Component, Renderer2, ElementRef ,OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  isDropdownOpen: boolean = false;
  toggleDropdown(): void {
    console.log('Toggle dropdown method called');
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout(): void {
    console.log('Logout method called');
    this.isDropdownOpen = false;
  }
  changePassword(): void {
    this.router.navigate(['/ambassador/profil']);
    this.isDropdownOpen = false;
  }

  sidebarLinks = [
    { routerLink: '/ambassador', iconClass: 'fas fa-tachometer-alt', title: 'Dashboard' },
    { routerLink: '/ambassador/profil', iconClass: 'fas fa-user-circle', title: 'Profil' },
    { routerLink: '/ambassador/school-needs-management', iconClass: 'fas fa-book', title: 'school needs' },
    { routerLink: '/ambassador/sign-out', iconClass: 'fas fa-sign-out-alt', title: 'Sign Out' }
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
