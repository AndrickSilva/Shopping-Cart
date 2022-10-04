import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdApiService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get("http://192.168.43.36:3000/products")
  }

  getCartItems() {
    return this.http.get("http://192.168.43.36:3000/cart")
  }

  //delete cart item
  deleteCartItems(id: any) {
    return this.http.delete("http://192.168.43.36:3000/cart/" + id)
  }

}
