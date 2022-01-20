import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const appRoutes : Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full' },
  {path: 'products', component: ProductsComponent },
  {path: 'about', component: AboutComponent },
  {path: 'product', component: ProductComponent },
  {path: '**', component: PagenotfoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ProductsComponent,
    ProductItemComponent,
    AddProductComponent,
    AboutComponent,
    FooterComponent,
    ProductComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
