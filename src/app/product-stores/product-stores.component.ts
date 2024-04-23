import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-stores',
  templateUrl: './product-stores.component.html',
  styleUrl: './product-stores.component.css'
})

export class ProductStoresComponent implements OnInit {
  productName: string = '';

  //This array will hold all the information on products and stores
  productStores: any[] = [];

  // Table to store data //definite assignment assertion for OnInit to notify that it will be initialised later for sure
  tableData!: MatTableDataSource<any>;

  // Column Names for the productStore table
  tableColumns: string[] = ['Store', 'Price', 'Description', 'VisitStore'];

  // This to activate routes to read param value from home component
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {

      // Get the productName from the params parameter passed from the home component on click of a product
      this.productName = params.get('productName') ?? '';

      //DUMMY DATA
      //Create a product object to store data and push it in the array
      let productObj = {
        productName: this.productName,
        storeName: 'QFC',
        productPrice: '$10.99',
        productDescription: 'This is first product description',
        storeLink: 'http://qfc.com'
      };
      this.productStores.push(productObj);
      
      //DUMMY DATA
      productObj = {
        productName: this.productName,
        storeName: 'WholeFoods',
        productPrice: '$7.99',
        productDescription: 'This is second product description.',
        storeLink: 'http://wholefoods.com'
      };
      this.productStores.push(productObj);


      let tableValues = this.productStores.map(item => {
        return {
          Store: item.storeName,
          Price: item.productPrice,
          Description: item.productDescription,
          VisitStore: item.storeLink
        };
      });

      // Assign the data for display
      this.tableData = new MatTableDataSource(tableValues);

    });
  }
}
