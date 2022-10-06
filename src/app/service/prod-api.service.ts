import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProdApiService {

  constructor(private http: HttpClient) { }

  // get all products
  getAllProducts() {
    return this.http.get("http://localhost:3000/products")
    .pipe(map((res: any) => {
      return res;
    }))
  }

  // GET CART ITEM
  getCartItems() {
    return this.http.get("http://localhost:3000/cart")
    .pipe(map((res: any)=>{
      return res
    }))
  }

  //delete cart item
  deleteCartItems(id: any) {
    return this.http.delete("http://localhost:3000/cart/" + id)
    .pipe(map((res: any)=>{
      return res
    }))
  }

  //delete cart item
  postCartItems(data: any) {
    return this.http.post("http://localhost:3000/cart/", data)
    .pipe(map((res: any)=>{
      return res
    }))
  }

}
