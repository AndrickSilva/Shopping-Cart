import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  cartItem!: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartItem = this.route.snapshot.paramMap.get("items")
    console.log(this.cartItem);
  }

}
