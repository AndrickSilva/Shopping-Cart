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
  Url: string = 'http://localhost:3000/products/1'  //change url
  newUrl!: string
  items!: any

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get("id")
    this.newUrl = `${this.Url}/${this.itemId}`
    // console.log(this.newUrl);

    this.getProduct().subscribe(res => {
      this.items = res
      console.log(this.items);
    });

  }
  getProduct() {
    return this.http.get(this.Url)
    // return this.http.get(this.newUrl) //original url
  }
}
