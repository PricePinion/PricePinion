import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: "app-save-for-later",
	templateUrl: "./save-for-later.component.html",
	styleUrl: "./save-for-later.component.css",
})

export class SaveForLaterComponent implements OnInit {
	// @Input() productName: string = '';

	productName: string = '';

	//This array will hold the list of products saved for later
	productList: any[] = [];

	// Table to store product names //definite assignment assertion for OnInit to notify that it will be initialised later for sure
	tableDataProductNames!: MatTableDataSource<any>;

	// Table to store product data for each product
	tableDataProductData!: MatTableDataSource<any>;

	// Column Names for the productStore table
	tableColumns: string[] = ['Image', 'ProductName'];

	ngOnInit(): void {
		// console.log("Product Name received in SaveForLaterComponent:", this.productName);
		let productObj = {
			productName: 'Product 1',
			productImage: "[Image]"
		};

		this.productList.push(productObj);

		productObj = {
			productName: 'Product2',
			productImage: '[Image]'
		};
		this.productList.push(productObj);
	}

}
