import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/'; // Update this URL as per your server configuration
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<any>(null);
    this.user = this.userSubject.asObservable();
    this.fetchUserData();
  }

  login() {
    window.location.href = `${this.authUrl}auth/google`; // Update this URL as per your server configuration
  }

  logout() {
    this.http.get(`${this.authUrl}auth/logout`, { withCredentials: true }).subscribe(() => {
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/']);
    });
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  getUser(): any {
    return this.userSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }

  fetchUserData() {
    this.http.get<any>(`${this.authUrl}auth/user`, { withCredentials: true }).subscribe(
      user => {
        console.log("User data fetched successfully:", user); // Log the user data for debugging
        this.setUser(user);
      },
      error => {
        console.error('Failed to fetch user data', error);
        this.userSubject.next(null);
      }
    );
  }
}
