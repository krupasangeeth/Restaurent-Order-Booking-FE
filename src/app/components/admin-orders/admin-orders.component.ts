import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  constructor(private apiService : ApiService){

  }
  orders : any[] = [];
  ngOnInit(): void {
    this.apiService.getApi('order').subscribe(
      (res) => {
        console.log(res);
        this.orders = [...res];
      }
    );
  }

}
