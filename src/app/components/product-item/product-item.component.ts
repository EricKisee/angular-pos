import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input () product!: Product;
  @Output () onAddProduct: EventEmitter <Product> = new EventEmitter(); 
  @Output () onMinusProduct: EventEmitter <Product> = new EventEmitter(); 
  @Output () onToggleProduct: EventEmitter <Product> = new EventEmitter(); 
  faPlus = faPlus;
  faMinus = faMinus;

  constructor() { }

  ngOnInit(): void {
  }

  onMinus(product:Product){
    this.onMinusProduct.emit(product);
  }

  onAdd(product:Product){
    this.onAddProduct.emit(product);
  } 

  onToggle(product:Product) {
    this.onToggleProduct.emit(product);
  }

}
