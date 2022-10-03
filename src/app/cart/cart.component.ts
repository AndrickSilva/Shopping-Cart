import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdApiService } from '../service/prod-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  cartItem!: any
  discountedPrice!: any
  finalPrice!: any
  constructor(private route: ActivatedRoute, private service: ProdApiService) { }

  ngOnInit(): void {
    // this.cartItem = this.route.snapshot.paramMap.get("items")
    // console.log(this.cartItem);
    this.getCartItems()
  }
  getCartItems() {
    this.service.getCartItems().subscribe(cartResp => {
      this.cartItem = cartResp;
      this.discountedPrice = this.percentage(this.cartItem.discountPercentage, this.cartItem.price)
      this.finalPrice = (this.cartItem.price - this.discountedPrice)
      console.log(this.finalPrice);
    })
  }
  // remove percentage of price
  percentage(percent: number, total: number) {
    return ((percent / 100) * total).toFixed(2)
  }

}
