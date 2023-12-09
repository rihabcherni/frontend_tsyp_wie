import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  private apiUrl = 'http://localhost:5000';
  private tokenKey = 'authToken';
  private roleKey = 'role';
  private userKey = 'user';

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  setRole(role: string): void {
    localStorage.setItem(this.roleKey, role);
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  removeRole(): void {
    localStorage.removeItem(this.roleKey);
  }

  setUser(user: object): void {
    const userString = JSON.stringify(user);
    localStorage.setItem(this.userKey, userString);
  }

  getUser(): object | null {
    const userString = localStorage.getItem(this.userKey);
    return userString ? JSON.parse(userString) : null;
  }

  removeUser(): void {
    localStorage.removeItem(this.userKey);
  }

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/auth/login`, loginData);
  }
}
