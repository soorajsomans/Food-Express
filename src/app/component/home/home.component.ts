import { Component, OnInit } from '@angular/core';
import { RestaurantDataService } from 'src/app/service/restaurant-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  restuarants:any = [];
  constructor(private restaurantDataService:RestaurantDataService,
    private router:Router) { }

  ngOnInit() {
    this.restaurantDataService.getRestaurantsData().subscribe(data=>{
      this.restuarants = data;
      console.log(data);
    })
  }


  exploreRestaurant(restaurantId){
    this.router.navigate(['restaurant',restaurantId]);    
  }
}
