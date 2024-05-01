import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {
	dummyProducts = [
		{ pname: "Honeycrisp Apples - 3 Pound Bag", imageUrl:"https://www.kroger.com/product/images/large/front/0001111018189" },
		{ pname: "Fuji Apples - 3 Pound Bag", imageUrl:"https://www.kroger.com/product/images/large/front/0001111018188"},
		{ pname: "Sara Lee Artesano Bakery Bread", imageUrl: "https://www.kroger.com/product/images/large/front/0007294561241" },
		{ pname: "Simple Truth Organic® 2% Reduced Fat Milk", imageUrl: "https://www.kroger.com/product/images/large/front/0001111042902" },
		{ pname: "Bok Choy", imageUrl: "https://www.kroger.com/product/images/large/front/0000000004545" },
		{ pname: "Smart Water", imageUrl: "https://www.kroger.com/product/images/large/front/0073262366368" },
		{ pname: "Kroger® Beef Shaved Steak", imageUrl: "https://www.kroger.com/product/images/large/front/0001111034567" },
	];

	// Array to hold filtered products by search
	filteredProducts: any[] = [...this.dummyProducts]; 
	searchFilter: string = "";

	filterProducts(searchFilter: string): void {
		console.log(searchFilter);

		if (searchFilter) {
			this.filteredProducts = this.dummyProducts.filter((product) =>
				product.pname.toLowerCase().includes(searchFilter.toLowerCase())
			);
		} 
		else {
			this.filteredProducts = [...this.dummyProducts]; 
		}
		console.log(this.filteredProducts);
	}
}