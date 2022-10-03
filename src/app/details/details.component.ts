import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  itemId!: string | null
  Url: string = 'http://localhost:3000/products/'  //change url
  newUrl!: string
  items!: any
  discountedPrice!: any
  finalPrice!: any

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get("id")
    this.newUrl = `${this.Url}/${this.itemId}`

    this.getProduct().subscribe(res => {
      this.items = res
    });
  }

  //getting the current product
  getProduct() {
    return this.http.get(this.newUrl)
  }

  // remove percentage of price
  percentage(percent: number, total: number) {
    return ((percent / 100) * total).toFixed(2)
  }
}
