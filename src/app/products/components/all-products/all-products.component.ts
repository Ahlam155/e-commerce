import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/shared/models/cart-product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products!: CartProduct[];
  categories!: CartProduct[];
  categoryName:string=""
  showSnipper:boolean=false;

  constructor(private productService:ProductsService) {
}

  ngOnInit(): void {
    this.getAllProducts()
    this.getCategories()

  }
  getAllProducts(){
    this.showSnipper=true
    this.productService.getAllProducts().subscribe((res:any)=>{
      console.log(res)
      this.products=res;
      this.showSnipper=false
    },error=>{
      console.log(error.message)
      this.showSnipper=false
    }
    )
  }
  filterProducts(name:string){
    this.categoryName=name;
    this.categoryName=="All"? this.getAllProducts() : this.getProductByCatName()

  }
  getProductByCatName(){
    this.showSnipper=true
    this.productService.getProductByCatName(this.categoryName).subscribe((res:any)=>{
      console.log(res)
      this.products=res
      this.showSnipper=false
    },error=>{
      console.log(error.message)
      this.showSnipper=false
    }
    )
  }
  getCategories(){
    this.showSnipper=true
    this.productService.getAllCategories().subscribe((res:any)=>{
      console.log(res)
      this.categories=res
      this.showSnipper=false

    },error=>{
      console.log(error.message)
      this.showSnipper=false

    }
    )
  }


}
