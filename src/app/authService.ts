import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private authUrl = 'http://localhost:8080/'; // Update this URL as per your server configuration

    constructor() { }

    login() {
        window.location.href = `${this.authUrl}auth/google`; // Update this URL as per your server configuration
    }

    logout() {
        window.location.href = `${this.authUrl}auth/logout`; // Update this URL as per your server configuration
        localStorage.removeItem('user');
    }

    setUser(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }
}
