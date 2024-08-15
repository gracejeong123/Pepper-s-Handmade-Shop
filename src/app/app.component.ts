/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-website';
}
*/

import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavbarComponent, ProductListingComponent] // Import the standalone components
})
export class AppComponent { }

