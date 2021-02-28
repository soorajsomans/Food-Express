import { Component, OnInit } from '@angular/core';
import { RestaurantDataService } from 'src/app/service/restaurant-data.service';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = []
  totalPrice = 0;
  quantity = 1;
  isOrder = false;
  constructor(private restaurantData: RestaurantDataService,
    private route:Router) { }

  ngOnInit() {

    this.cartItems = this.restaurantData.cartItems
    
    this.calcTotalPrice()
    
  }

  getQuantity(event: any, id , qty) {
    
    this.quantity = event.target.value
   this.cartItems.forEach(element =>{
    
     if(id == element.id){
      element.item_qty = this.quantity
     }
     
   })
   this.calcTotalPrice()


}

  calcTotalPrice() {
    this.totalPrice = 0
    this.cartItems.forEach(element => {
      this.totalPrice = this.totalPrice + Number(element.item_price * element.item_qty)
    })

  }

  removeItem(id){
    const index = this.cartItems.findIndex(i => i==id);  
    this.cartItems.splice(index,1);
    this.calcTotalPrice()
  }


  buyNow(){
    if (this.isOrder) { 
      return;
    } 
    this.isOrder = true;
    this.cartItems=[];
    this.restaurantData.cartItems = []
    setTimeout(()=> this.isOrder = false,2500
    );
    setTimeout(()=>this.route.navigate(['']),2500);
 
  }
}
