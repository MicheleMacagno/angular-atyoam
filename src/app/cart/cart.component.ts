import { Component, OnInit } from "@angular/core";
/* Configure the component to use the cart service. */
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  /* inject the CartService in the Cart component. */
  constructor(private cartService: CartService) {}

  ngOnInit() {
    /*
    Set the items using the cart service's getItems() method. Recall that you defined this method when you generated cart.service.ts.
  */
    this.items = this.cartService.getItems();
  }
}
