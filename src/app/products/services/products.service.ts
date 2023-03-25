import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return  this.http.get((environment as any).baseUrl+"products")
  }
  getProductByCatName(cName:string){
    return this.http.get((environment as any).baseUrl+"products/category/"+cName)
  }
  getAllCategories(){
    return  this.http.get((environment as any).baseUrl+"products/categories")
  }
  getSingleProduct(id:number){
    return this.http.get((environment as any).baseUrl+"products/"+String(id))
  }
}
