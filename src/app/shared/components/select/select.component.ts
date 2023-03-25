import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() title:string=""
  @Input() allValues:any[]=[];
  @Output() catFromSelect: EventEmitter<string>;
  constructor(private productService:ProductsService) {
    this.catFromSelect= new EventEmitter<string>
  }

  ngOnInit(): void {

  }

  detectChanges(name:any){
    let newVale=name.target.value;
    this.catFromSelect.emit(newVale)
  }
}
