import { Component, OnInit } from '@angular/core';
import { ProdApiService } from '../service/prod-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProdApiService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  products: any

  getAllProducts() {
    this.service.getAllProducts().subscribe(response => {
      this.products = response;
      // console.log(this.products);
    });
  }

}
