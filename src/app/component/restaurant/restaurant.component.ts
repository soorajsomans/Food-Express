import { Component, OnInit } from '@angular/core';
import { RestaurantDataService } from 'src/app/service/restaurant-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';





@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {

  restaurantFilter =null;
  menuItems:any =[];
  originalItems:any = [];
  isChecked = false;
  isAdded = false;
  checked=[];
  selected:any=[];
 
 
  totalPriceByItem = 0;

  constructor(private restaurantDataService:RestaurantDataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.restaurantFilter = this.route.snapshot.params['id'];
  
    this.restaurantDataService.getMenuData().subscribe(data=>{
      this.menuItems=data;
      this.originalItems = this.menuItems;
      
    })

  }

 
  addToCart(item){
  
    this.restaurantDataService.cartItems.push(item)
    if (this.isAdded) { 
      return;
    } 
    this.isAdded = true;
    setTimeout(()=> this.isAdded = false,2000); 
 

  }

 catfilter(event:any){
   this.isChecked=true
  if(event.target.checked){
    this.checked.push(event.target)
    this.doFilter()
  }else{
    this.menuItems = this.originalItems
    const index = this.checked.findIndex(i => i.value==event.target.value);  
    this.checked.splice(index,1)
    this.doFilter()
  }
 }

 doFilter(){
  this.checked.forEach(element=>{
    this.menuItems = this.menuItems.filter((s) => s.item_category === element.value || s.item_course === element.value);
  })
 }


clearFilter(){
   this.checked.filter(s=>s.checked =false);
   this.checked = []
   this.selected.filter(r=>r.checked =false);
   this.selected = []
   this.ngOnInit()
  this.isChecked = false
}

  sort(event: any) {
    this.selected.push(event.target)
    this.isChecked = true
    switch (event.target.value) {
      case "Low":
        {
          this.menuItems = this.menuItems.sort((low, high) => low.item_price - high.item_price);
          break;
        }

      case "High":
        {
          this.menuItems = this.menuItems.sort((low, high) => high.item_price - low.item_price);
          break;
        }

      default: {
        this.menuItems = this.menuItems.sort((low, high) => low.item_price - high.item_price);
        break;
      }

    }
    return this.menuItems;

  }

}
