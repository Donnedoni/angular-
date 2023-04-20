import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get('https://fakestoreapi.com/products');

  }

  getProductOne(id:number){
    return this.http.get('https://fakestoreapi.com/products'+id);

  }


  createProduct(body:any){
    this.http.post('https://fakestoreapi.com/products',body);
  }

  updateProduct(id:number,body:any){
      return this.http.put('https://fakestoreapi.com/products'+id,body);
  }


  deleteProduct(id:number){
      return this.http.delete('https://fakestoreapi.com/products'+id);
  }
  


}
