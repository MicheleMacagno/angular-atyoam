import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  /*
  references: https://angular.io/start/start-routing

  Define the product property and inject the ActivatedRoute into the constructor by adding it as an argument within the constructor's parentheses.

  The ActivatedRoute is specific to each routed component that the Angular Router loads. It contains information about the route, its parameters, and additional data associated with the route.

  By injecting the ActivatedRoute, you are configuring the component to use a service.
  */

  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  /*
  In the ngOnInit() method, subscribe to route parameters and fetch the product based on the productId.

  The route parameters correspond to the path variables you define in the route. The URL that matches the route provides the productId. Angular uses the productId to display the details for each unique product.
  */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
}
