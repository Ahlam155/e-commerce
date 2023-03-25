import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/shared/models/cart-product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() product:any={}
@Output() newProduct =new EventEmitter
selectedQuantinty:number=0
cartProducts:any[]=[]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  change(val:any){

    this.selectedQuantinty= val.target.value
    console.log(this.selectedQuantinty)

  }
  addToCart(){
    this.product.selectedQuantinty=this.selectedQuantinty

    if(localStorage.getItem("cart")){
      this.isExist(this.product)
    }

    else{
      this.cartProducts.push(this.product)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))

    }
    console.log("cartproducts from product component",this.cartProducts)
    this.selectedQuantinty=0
  }

  isExist(product:CartProduct){
    // check if the product already exist
    this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProducts.find((ele)=>ele.id==product.id)
      if(exist){
        let totalCount = Number(product.selectedQuantinty)+ Number(exist.selectedQuantinty)
          if(totalCount< product.rating.count){
            exist.selectedQuantinty=String(totalCount)
            localStorage.setItem("cart",JSON.stringify(this.cartProducts))

          }
          else{
            alert(`sorry! the available quantity is:${product.rating.count}`)
          }
      }
      else{
        this.cartProducts.push(product)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))

      }
  }

}
