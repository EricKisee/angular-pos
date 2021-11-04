import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title = 'Products';
  showAddProduct!: boolean;
  subscription!: Subscription;


  constructor(private uiSercvice : UiService, private router:Router) {
    this.subscription = this.uiSercvice.toggle().subscribe((value)=> (this.showAddProduct = value))
   }

  ngOnInit(): void {
  }

  toggleAddTask (){
     this.uiSercvice.toggleAddProduct();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
