import { Component, OnInit } from '@angular/core';
import { ProdApiService } from '../service/prod-api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private service: ProdApiService) { }

  totalItems: any
  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems() {
    this.service.getCartItems().subscribe(cartResp => {
      this.totalItems = cartResp;
    });
  }
}
