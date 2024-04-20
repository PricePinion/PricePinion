import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dummyProducts = [
    { pname: 'Kroger Honey Crisp Apples' },
    { pname: 'Kroger Fuji Apples' },
    { pname: 'Natures Basket Bread' },
    { pname: '2% Milk' },
    { pname: 'Organic Eggs' },
  ];

  filteredProducts: any[] = [...this.dummyProducts]; // Array to hold filtered products by search
  searchFilter: String = '';

  filterProducts(searchFilter: string): void 
  {
    console.log( searchFilter);
    if (searchFilter.trim()) {
      this.filteredProducts = this.dummyProducts.filter(product =>
        product.pname.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    else {
      this.filteredProducts = [...this.dummyProducts]; // Display all products
    }
    //if no products match the search criteria
    if (this.filteredProducts.length === 0) {
      this.filteredProducts.push({ pname: 'Product not found!' });
    }
  }
}
