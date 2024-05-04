import { ProductService } from './../product-service.service';
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
	products: any[] = [];

	// Array to hold filtered products by search
	filteredProducts: any[] = [];

	//Search Bar Filter
	searchFilter: string = "";
	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.getAllProducts();
	}

	getAllProducts() {
		this.productService.getAllProducts()
			.subscribe({
				next: (response) => {
					this.products = response;
					this.filteredProducts = [...this.products];
				},
				error: (error) => {
					console.error('Error fetching products:', error);
				}
			});
	}

	filterProducts(): void {
		if (this.searchFilter && this.products) {
			this.filteredProducts = this.products.filter((product) =>
				product.productName.toLowerCase().includes(this.searchFilter.toLowerCase())
			);
		} else {
			this.filteredProducts = [...this.products];
		}
	}
}

