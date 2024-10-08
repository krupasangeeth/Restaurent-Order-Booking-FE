import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { Order } from 'src/app/services/order.service';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  constructor(private apiService: ApiService, private ngbModal: NgbModal) {}
  orders: any[] = [];
  ngOnInit(): void {
    this.apiService.getApi('order').subscribe((res) => {
      console.log(res);
      this.orders = [...res];
    });
  }

  onOrderClick(order: any) {
    let orderModalRef = this.ngbModal.open(OrderDetailsComponent, {
      size: 'lg',
      backdrop: 'static',
    });
    orderModalRef.componentInstance.order = order;
  }
}
