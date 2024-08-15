/* import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent {

}
*/

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule to use *ngFor and *ngIf
})
export class ProductListingComponent {
  products = [
    {
      name: 'Product 1',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/products/product5.jpeg'
    },
    {
      name: 'Product 2',
      description: 'This is product 2',
      price: 59.99,
      imageUrl: 'assets/products/product5.jpeg'
    },
    {
      name: 'Product 3',
      description: 'This is product 2',
      price: 59.99,
      imageUrl: 'assets/products/product5.jpeg'
    },
    {
      name: 'Product 4',
      description: 'This is product 2',
      price: 59.99,
      imageUrl: 'assets/products/product5.jpeg'
    },
    {
      name: 'Product 5',
      description: 'This is product 2',
      price: 59.99,
      imageUrl: 'assets/products/product5.jpeg'
    },
    {
      name: 'Product 6',
      description: 'This is product 6',
      price: 59.99,
      imageUrl: 'assets/products/product6.jpeg'
    },

    {
      name: 'Product 7',
      description: 'This is product 6',
      price: 59.99,
      imageUrl: 'assets/products/product6.jpeg'
    },

    {
      name: 'Product 8',
      description: 'This is product 6',
      price: 59.99,
      imageUrl: 'assets/products/product6.jpeg'
    },
    // Add more products as needed
  ];
}



