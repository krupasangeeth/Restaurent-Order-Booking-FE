import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { Order } from 'src/app/services/order.service';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { WebSocketSubject } from 'rxjs/webSocket';
import { OrderStatusWebsocketService } from 'src/app/services/order-status-websocket.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  constructor(
    private apiService: ApiService,
    private ngbModal: NgbModal,
    private socket: OrderStatusWebsocketService
  ) {}
  ngOnDestroy(): void {
    this.socket$.complete();
  }
  orders: any[] = [];
  socket$!: WebSocketSubject<any>;

  ngOnInit(): void {
    this.apiService.getApi('order').subscribe((res) => {
      console.log(res);
      this.orders = [...res];
    });
    // this.socket$ = new WebSocketSubject('ws://localhost:8080/ws/orderstatus');
    this.socket$ = this.socket.establishConnection();
    this.socket$.subscribe();
  }

  onOrderClick(order: any) {
    let orderModalRef = this.ngbModal.open(OrderDetailsComponent, {
      size: 'lg',
      backdrop: 'static',
    });
    orderModalRef.componentInstance.order = order;
    orderModalRef.componentInstance.orderStatusChange.subscribe((obj: any) => {
      console.log(obj);
      // const
      this.socket$.next(obj);
    });
  }
}
