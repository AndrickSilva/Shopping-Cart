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
  total: number = 0;
  totalPrice: number = 0;
  totalPercentage: number = 0;

  constructor(private route: ActivatedRoute, private service: ProdApiService) { }

  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems() {
    this.service.getCartItems().subscribe(cartResp => {
      this.cartItem = cartResp;
      console.log(cartResp);

      this.cartItem.forEach((item: any) => {
        const price = this.percentage(item.discountPercentage, item.price)
        this.total += Math.round(+price)
        this.totalPrice += item.price
        this.totalPercentage += Math.round(item.discountPercentage)
      })
    });
  }

  // remove percentage of price
  percentage(percent: number, total: number) {
    return ((100 - percent) * total / 100).toFixed(2)
  }

}
