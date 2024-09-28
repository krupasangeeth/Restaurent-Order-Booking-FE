import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ItemStatus, Order, OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit{
  order:Order;
  constructor(private orderService: OrderService, private apiService: ApiService) {
    this.order = this.orderService.getOrder();
  }
  ngOnInit(): void {
    // this.dbService.getApi('order/b65a').subscribe()
  }

  getStatusClass(itemStatus: ItemStatus) {
    let itemStatusClass: string[] = [];
    switch(itemStatus) {
      case ItemStatus.YET_TO_PREPARE : itemStatusClass = ['text-danger', 'fw-bold']; break;
      case ItemStatus.BEING_PREPARED : itemStatusClass = ['text-warning', 'fw-bold']; break;
      case ItemStatus.PREPARED : itemStatusClass = ['text-success', 'fw-bold']; break;
    }
    return itemStatusClass;
  }
}
