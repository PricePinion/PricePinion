import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AccountComponent } from "./account.component";
import { ReactiveFormsModule } from '@angular/forms';

describe("AccountComponent", () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountComponent],
      imports: [ReactiveFormsModule] // Add this line
    }).compileComponents();

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
