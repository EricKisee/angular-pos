import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product [] = [];

  constructor(private productService : ProductService, private userService : UserService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((products)=>(this.products=products));

      this.userService.getUsers().subscribe((users)=>(console.log(users)));
  }

  add(product:Product){
    product.quantity = product.quantity+1;
    this.productService.updateProduct(product).subscribe();
  }

  minus(product:Product){
    product.quantity = product.quantity-1;
    this.productService.updateProduct(product).subscribe();
  }

  deleteProduct (product:Product) {
    this.productService
      .deleteProduct(product)
      .subscribe(
        ()=>(
          this.products=this.products.filter((p) => p.id !== product.id ))
      );
  }

  toggle (product:Product) {
    // this.deleteProduct(product);
  }

  addProduct (product:Product){
    this.productService.addProduct(product).subscribe((product)=>(this.products.push(product)));
  }

}
