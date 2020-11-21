import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

/*
Remeber to inject the cartService in the constructor of the component that wants to use it
*/

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  /* 
    emulates the HTTP call to a client!  
    more information in:
    https://angular.io/guide/http
  
  */
  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
