# To include app.module.ts
ng new --no-standalone FrontEnd

# Go to directory FrontEnd 
cd FrontEnd 

# Add angular material for icons, buttons, gridList, SearchField etc.
ng add @angular/material

# Add Toolbar
Get snippet from Angular Material website:

In app.module.ts -
import {MatToolbarModule} from '@angular/material/toolbar';
and add this component under 'imports:'

Add the nav bar in  navbar.component.html
Similarly, add every imported components (like button, icon etc..) under imports

# Icons for NavBar
https://fonts.google.com/icons

# Create new components 
Use ng g c <component-name>
example: ng g c Home

# Add Routes
Update routes in app-routing.module.ts to navigate to your component ex: Home, saveforlater, account
{path: 'Home', component: HomeComponent},

Add property routerLink="Home" in navbar.component.html

To set up the router add <router-outlet></router-outlet> in app.component.html 

# Build User Input Form
In Account component,
import { FormBuilder } from '@angular/forms';

Create a constructor,
 constructor(
    private formBuilder: FormBuilder,
  ) {}

Create form groups here to bind the component to the HTML fields to manipulate data,
customerForm = this.formBuilder.group({
    name: 'customer customer',
    email:'customer@customer.com',
    password:'12345'
  });

To make the form reactive to user input and changes, add to your app.module.ts
import { ReactiveFormsModule } from '@angular/forms';

# Bind html elements to your component to access values of the elements
ex: [(ngModel)]="searchFilter"