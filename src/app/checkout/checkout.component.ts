import { Component, OnInit } from '@angular/core';
import { faTruck,faBell,faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faTruck = faTruck
  faBell = faBell
  faStar = faStar
}
