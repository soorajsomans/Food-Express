import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { MenuComponent } from './component/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    HomeComponent,
    CartComponent,
    MenuComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
