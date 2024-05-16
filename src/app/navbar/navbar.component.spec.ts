import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavbarComponent } from "./navbar.component";
import { MatMenuModule } from '@angular/material/menu'; // Add this line
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [MatMenuModule], // Add this line
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line if using Angular Material components
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
