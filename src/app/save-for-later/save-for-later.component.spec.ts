import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SaveForLaterComponent } from "./save-for-later.component";
import { HttpClientModule } from '@angular/common/http';

describe("SaveForLaterComponent", () => {
  let component: SaveForLaterComponent;
  let fixture: ComponentFixture<SaveForLaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveForLaterComponent],
      imports: [HttpClientModule] // Add this line
    }).compileComponents();

    fixture = TestBed.createComponent(SaveForLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
