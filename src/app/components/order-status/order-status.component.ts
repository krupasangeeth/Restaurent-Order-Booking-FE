import { Component, OnInit } from '@angular/core';
import { WebSocketMessage } from 'rxjs/internal/observable/dom/WebSocketSubject';
import { WebSocketSubject } from 'rxjs/webSocket';
import { ApiService } from 'src/app/services/api.service';
import { OrderStatusWebsocketService } from 'src/app/services/order-status-websocket.service';
import {
  ItemStatus,
  Order,
  OrderService,
} from 'src/app/services/order.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css'],
})
export class OrderStatusComponent implements OnInit {
  order: Order;
  socket$!: WebSocketSubject<any>;
  constructor(
    private orderService: OrderService,
    private apiService: ApiService,
    private soc: OrderStatusWebsocketService
  ) {
    this.order = this.orderService.getOrder();
  }
  ngOnInit(): void {
    // this.dbService.getApi('order/b65a').subscribe()
    this.socket$ = this.soc.establishConnection();
    this.socket$.subscribe(
      (msg: any) => {
        console.log('received ' + msg);
        console.log(
          this.order.items.get(msg['orderItemId'].toString()) + 'items'
        );
        // console.log(msg['orderItemId'] + 'id');
        // const orderItem: any = this.order.items.get(msg['orderItemId']);
        // orderItem.itemStatus = msg['status'];
        // this.order.items.set(msg['orderItemId'], orderItem);
      },
      (err) => {
        console.log(err);
      },
      () => console.log('closed')
    );
  }

  getStatusClass(itemStatus: ItemStatus) {
    let itemStatusClass: string[] = [];
    switch (itemStatus) {
      case ItemStatus.YET_TO_PREPARE:
        itemStatusClass = ['text-danger', 'fw-bold'];
        break;
      case ItemStatus.BEING_PREPARED:
        itemStatusClass = ['text-warning', 'fw-bold'];
        break;
      case ItemStatus.PREPARED:
        itemStatusClass = ['text-success', 'fw-bold'];
        break;
    }
    return itemStatusClass;
  }

  orderStatus = 'yet to prepare';
}
