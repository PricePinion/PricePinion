import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../authService';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any;
  isGoogleUser: boolean = false;
  customerForm: FormGroup;
  statusText: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      name: [{value: '', disabled: true}, []],
      email: [{value: '', disabled: true}, []],
      password: ['']
    });

    this.statusText = this.fb.group({
      text: ['']
    });
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.user = user;
      this.isGoogleUser = !!user?.googleId; // Assuming googleId is set for Google OAuth users

      if (user) {
        this.customerForm.patchValue({
          name: user.displayName || user.name,
          email: user.email
        });

        if (this.isGoogleUser) {
          this.customerForm.get('name')?.disable();
          this.customerForm.get('email')?.disable();
        } else {
          this.customerForm.get('name')?.enable();
          this.customerForm.get('email')?.enable();
        }
      }
    });
  }

  onSubmit(): void {
    if (this.customerForm.valid && !this.isGoogleUser) {
      // Handle form submission for non-Google users
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
