import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductStoresComponent } from './product-stores.component';
import { ProductService } from '../product-proxy.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProductStoresComponent', () => {
  let component: ProductStoresComponent;
  let fixture: ComponentFixture<ProductStoresComponent>;
  let productService: any;

  beforeEach(async () => {
    const productServiceMock = {
      getOneProduct: jasmine.createSpy('getOneProduct').and.returnValue(of({
        productComparison: [
          { storeName: 'Store 1', productPrice: 100, productLink: 'http://store1.com' },
        ],
        storeName: 'Store 2',
        productPrice: 200,
        productLink: 'http://store2.com',
      })),
      setSaveForLater: jasmine.createSpy('setSaveForLater').and.returnValue(of({ status: '201' }))
    };

    await TestBed.configureTestingModule({
      declarations: [ProductStoresComponent],
      imports: [HttpClientTestingModule, MatTableModule],
      providers: [
        { provide: ProductService, useValue: productServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => 'testProductID',
            }),
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductStoresComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch product stores and populate table', () => {
    fixture.detectChanges();
    expect(productService.getOneProduct).toHaveBeenCalledWith('testProductID');
    expect(component.tableData).toBeDefined();
    expect(component.tableData.data.length).toBeGreaterThan(0);
  });

  it('should save product for later and show success message', () => {
    component.productID = 'testProductID';
    component.setSaveForLater();
    expect(productService.setSaveForLater).toHaveBeenCalledWith('testProductID');
    expect(component.statusMessage).toBe('Data is saved successfully!');
  });
});
