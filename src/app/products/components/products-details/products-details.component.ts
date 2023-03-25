import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/shared/models/cart-product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: any;
  id:number=0;
  showSnipper:boolean=false
  constructor(private productService:ProductsService,
              private activatedRoute:ActivatedRoute,
              private location:Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((prams)=>{
      this.id=Number(prams.get("id"))
      this.getProduct(this.id)
    })
  }
getProduct(id:number){
  this.showSnipper=true
  this.productService.getSingleProduct(id).subscribe((res)=>{
    this.product=res
    this.showSnipper=false

  },error=>{
    console.log(error)
    this.showSnipper=false

  }
  )
}
back(){
  this.location.back()
}
}
