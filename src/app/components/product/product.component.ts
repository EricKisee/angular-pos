import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/Product_';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!: product;


  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct(3).subscribe((product)=>(this.product=product))
  }

}
