import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CartProduct } from 'src/app/shared/models/cart-product';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {
  cartProducts:any
  totalPrice:number=0;
  success:boolean=false
  click:boolean=false;
  constructor(private cartService:CartsService) {

  }

  ngOnInit(): void {
    this.getCartProduct()
  }
  getCartProduct(){
    this.cartProducts=localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")!):[];
    this.getTotalPrice()
    this.success=false
  }
  getTotalPrice(){
    this.totalPrice=0
    this.cartProducts.map((e: {
      price: number; selectedQuantinty: number;
})=>this.totalPrice+=(Number(e.selectedQuantinty) * e.price))
  }
  remove(product:any)
  {
    this.cartProducts.splice(this.cartProducts.indexOf(product),1)
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    this.getTotalPrice()

  }
  onChange(cart:CartProduct,newValue:any){
    cart.selectedQuantinty=newValue
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    this.getTotalPrice()

  }
  removeAll(){
    this.cartProducts=[];
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    this.totalPrice=0

  }
  order(){
    let products = this.cartProducts.map((e: { id: any; selectedQuantinty: any; })=>
      {return {productId:e.id,quantity:e.selectedQuantinty}})
      let model={
        userId:5,
        date:new Date(),
        products:products
      }
      this.cartService.createNewCart(model).subscribe((res)=>{
        this.success=true
      })
      localStorage.removeItem("cart");
      this.click=true;
  }

  ngOnDestroy() {
    this.success=false
  }
}
