import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product-proxy.service';

@Component({
  selector: 'app-product-stores',
  templateUrl: './product-stores.component.html',
  styleUrl: './product-stores.component.css'
})

export class ProductStoresComponent implements OnInit {
  productID: string = "";

  //This array will hold all the information on products and stores
  productStores: any;

  // Table to store data //definite assignment assertion for OnInit to notify that it will be initialised later for sure
  tableData!: MatTableDataSource<any>;

  // Column Names for the productStore table
  tableColumns: string[] = ['Store', 'Price', 'ShopNow'];

  //Display status message
  statusMessage: string = "";

  sflStatus: boolean = false;

  //To make api calls and get the params from other component
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Get the productID from the params parameter passed from the home component on click of a product
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productID = params.get('productID') ?? '';
    });

    this.getOneProduct();
    this.checkSFLStatus();
  }

  //Get all store information of the selected product
  getOneProduct() {
    this.productService.getOneProduct(this.productID)
      .subscribe({
        next: (response: any) => {
          this.productStores = response;

          this.generateTableData();
        },
        error: (error) => {
          console.error('Error fetching stores:', error);
        }
      });
  }

  //Pushing data to the tableData data source
  generateTableData() {
    //Combining the list of stores
    const listOfStores = [this.productStores, ...this.productStores.productComparison];

    const tableValues = listOfStores.map(item => {
      return {
        Store: item.storeName,
        Price: item.productPrice,
        ShopNow: item.productLink
      };
    });

    this.tableData = new MatTableDataSource(tableValues);
  }


  checkSFLStatus() {
    this.productService.getSaveForLater()
      .subscribe({
        next: (response: any) => {
          if (response.saveForLater.length > 0) {
            this.sflStatus = response.saveForLater.some((item: any) => item.productID === this.productID);
          }
        },
        error: (error) => {
          console.error('Error fetching stores:', error);
        }
      });
  }

  setMsgTimeOut() {
    setTimeout(() => {
      this.statusMessage = "";
    }, 3000)
  }

  //Save product in SaveForLater
  setSaveForLater() {
    this.productService.setSaveForLater(this.productID)
      .subscribe({
        next: (response: any) => {
          if (response) {
            this.statusMessage = "Data is saved successfully!";
            this.setMsgTimeOut()
          }
          this.checkSFLStatus();
        },
        error: (error) => {
          console.error('Error saving data', error);
        }
      });
  }

  //Remove product from SaveForLater
  removeSaveForLater() {
    this.productService.deleteSflProduct(this.productID)
      .subscribe({
        next: (response: any) => {
          if (response) {
            this.statusMessage = "Product is removed successfully!";
            this.setMsgTimeOut()
          }
          this.checkSFLStatus();
        },
        error: (error) => {
          console.error('Error removing data', error);
        }
      });
  }

}


