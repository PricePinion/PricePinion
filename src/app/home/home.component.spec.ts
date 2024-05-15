import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();

    // Mock the initial HTTP request
    const req = httpMock.expectOne('http://localhost:8080/api/products');
    req.flush([
      { productID: 'a94004cc259ca63d6fb01990898114f7', productName: 'Kroger® Lean Ground Beef Chuck 80/20 Homestyle Patties', productImage: 'https://www.kroger.com/product/images/medium/front/0001111092176' },
      { productID: '624063eae6f0a9929486333f3d9819ea', productName: 'Kroger® 85% Lean Fresh Ground Turkey', productImage: 'https://www.kroger.com/product/images/medium/front/0001111091992' }
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter products based on search input', () => {
    component.searchFilter = 'Ground Beef';
    component.filterProducts();
    expect(component.filteredProducts.length).toBe(1);
    expect(component.filteredProducts[0].productName).toBe('Kroger® Lean Ground Beef Chuck 80/20 Homestyle Patties');
  });

  it('should display "No products found" message when no products match search criteria', () => {
    component.searchFilter = 'Non-existent product';
    component.filterProducts();
    fixture.detectChanges();

    const noProductsMessage = fixture.debugElement.query(By.css('.text-center div')).nativeElement;
    expect(noProductsMessage.textContent).toContain('No products found matching your search criteria. Please try again.');
  });
});
