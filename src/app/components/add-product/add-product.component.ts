import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name!: string;
  description!: string;
  quantity!: number;
  price!: number;
  showAddProduct!:boolean;
  subscription!:Subscription;

  @Output() onAddProduct: EventEmitter <Product> = new EventEmitter();

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.toggle().subscribe((value)=>(this.showAddProduct = value));
  }

  ngOnInit(): void {
  }

  onSubmit (){
    if(!this.name){
      alert('please add name');
      return;
    }
    if(!this.description){
      alert('please add name');
      return;
    }
    if(!this.quantity){
      alert('please add name');
      return;
    }
    if(!this.price){
      alert('please add name');
      return;
    }

    const newProduct = {
      name : this.name,
      description : this.description,
      quantity : this.quantity,
      price : this.price
    }

    this.onAddProduct.emit(newProduct);

    this.name = '';
    this.description = '';
    this.quantity = 0;
    this.price = 0;
  }

}
