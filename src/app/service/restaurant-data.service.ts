import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {

  restaurantId: String =null;
  cartItems =[];
  orderItems = []
  constructor(
    private httpClient:HttpClient
  ) { }

  getRestaurantsData(){
    return this.httpClient.get("assets/restaurants.json")
  }

  getMenuData(){
    return this.httpClient.get("assets/menu.json")
  }
}
