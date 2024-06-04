import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product-proxy.service';

interface SaveForLaterItem {
	productID: string;
	productName: string;
	storeName: string;
	productPrice: string;
	productLink: string;
	productImage: string;
	productComparison: any[];
}

interface Product {
	customerID: string;
	customerName: string;
	customerEmail: string;
	saveForLater: SaveForLaterItem[];
}

@Component({
	selector: "app-save-for-later",
	templateUrl: "save-for-later.component.html",
	styleUrls: ["./save-for-later.component.css"],
})
export class SaveForLaterComponent implements OnInit {

	// Product data retrieved from SFL
	product: Product | null = null;

	// Table data source for product names and images
	tableDataProductNames = new MatTableDataSource<SaveForLaterItem>();

	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.getFromSavedForLater();
	}

	getFromSavedForLater() {
		this.productService.getSaveForLater()
			.subscribe((product: Product) => {
				if (product && product.saveForLater) {
					this.product = product;
					this.tableDataProductNames.data = product.saveForLater; 
				}
			});
	}

	deleteOneProductFromSFL(productId: string) {
		if (this.product) {
			this.productService.deleteSflProduct(productId)
				.subscribe(() => {
					this.product!.saveForLater = this.product!.saveForLater.filter(item => item.productID !== productId);
					this.tableDataProductNames.data = this.product!.saveForLater; 
				});
		}
	}

	deleteAllProductsFromSFL() {
		if (this.product) {
			this.productService.deleteAllSflProducts()
				.subscribe(() => {
					this.product!.saveForLater = [];
					this.tableDataProductNames.data = []; 
				});
		}
	}
}
