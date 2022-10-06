import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProdApiService } from "../service/prod-api.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private api: ProdApiService) { }

  itemId!: string | null
  Url: string = 'http://localhost:3000/products/'  //change url
  newUrl!: string
  items!: any

  cartBtn: boolean = false
  cartBtnText: string = 'Add to cart'
  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get("id")
    this.newUrl = `${this.Url}${this.itemId}`

    this.getProduct().subscribe(res => {
      this.items = res
      console.log(this.items);

      // this.postDetails(this.items)
    });
  }

  //getting the current product
  getProduct() {
    return this.http.get(this.newUrl)
  }

  // remove percentage of price
  percentage(percent: number, total: number) {
    return ((100 - percent) * total / 100).toFixed(2)
  }

  // Post user 
  postDetails() {
    this.api.postCartItems(this.items).subscribe(resp=>{
      if(!this.items) return
      alert("Added Successfully")
      console.log(resp);
    })
    this.cartBtn = true
    this.cartBtnText = 'Added Successfully'
  }

  // postDetails(){
  //   console.log("hello");
  // }
}
