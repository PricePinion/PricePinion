import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product-proxy.service';

@Component({
	selector: "app-save-for-later",
	templateUrl: "./save-for-later.component.html",
	styleUrl: "./save-for-later.component.css",
})

export class SaveForLaterComponent implements OnInit {

	productID: string = '';

	//List of stores saved for later
	productStores: any[] = [];

	// Table to store product names //definite assignment assertion for OnInit to notify that it will be initialised later for sure
	tableDataProductNames!: MatTableDataSource<any>;

	// Table to store product data for each product
	tableDataProductData!: MatTableDataSource<any>;

	// Column Names for the productStore table
	tableColumns: string[] = ['Image', 'ProductName'];

	//To make api calls and get the params from other component
	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.getFromSavedForLater()
	}

	getFromSavedForLater(){
		//make a call to retrieve data from SFL and display only product names and images on screen with buttons to clear/erase
	}

	getProductStoreDetails(){
		//on click of a product name in SFL, view the related store(s) information. 
		//Reuse product-stores.component.html for the view
	}

	deleteOneProductFromSFL(){
		//make a call to delete one product at a time from SFL on click of 'Clear' button
	}

	deleteAllProductsFromSFL(){
		//make a call to delete all products at a time from SFL on click of 'Clear ALL' button
	}
}
