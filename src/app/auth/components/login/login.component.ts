import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SuccessLoginMessageService } from '../../services/success-login-message.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  link:string ='';
  loginSuccess: boolean = false;
  successMessage: string = '';
  showSuccessMessage: boolean = false;

  constructor(
    private authService: AuthServicesService,
    private router: Router,
    private successMessageService: SuccessLoginMessageService
  ) {
    this.successMessageService.successMessage$.subscribe((message) => {
      this.showSuccessSnackbar(message);
    });
  }

  getLinkLogin():void {
    if(this.authService.getRole()=="Admin"){
      this.link ="/admin"
    }else if(this.authService.getRole()=="Donor"){
      this.link ="/donor"
    }else if(this.authService.getRole()=="ambassador"){
      this.link ="/ambassador"
    }
  }
  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        const token = response.token;
        const role = response.role;
        const user = response.user;
        this.authService.setToken(token);
        this.authService.setRole(role);
        this.authService.setUser(user);
        this.successMessageService.showSuccessMessage(`Login successful ${role+" :" + user?.firstName+" "+ user?.lastName}`);
        setTimeout(() => {
         this.getLinkLogin();
         this.router.navigate([this.link]);
        }, 2000);
        this.loginSuccess = true;
        console.log('Login successful', response);
      },
      (error) => {
        console.log(this.email, this.password);
        console.log('Login error', error);
      }
    );
  }
  showSuccessSnackbar(message: string): void {
    this.successMessage = message;
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
  }
}
