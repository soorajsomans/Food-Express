import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'restaurant/:id',component:RestaurantComponent},
  {path:'cart',component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
