import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Order, OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  order: Order;
  constructor(private orderService: OrderService, private router: Router, private httpClient: HttpClient, private apiService: ApiService) {
    this.order = this.orderService.getOrder();
  }

  getGST(): string {
    return (this.order.totalAmount * 0.07).toFixed(2);
  }

  getGrandTotal() {
    return (this.order.grandTotal).toFixed(2);
  }

  onAddMoreItems() {
    this.router.navigate(['/category']);
  }

  onConfirmOrder() {
    this.apiService.postApi('order', this.orderService.getOrderJson()).subscribe(
      (res) => {
        console.log("oreder saved");
        this.router.navigate(['/orderstatus'])
      },
      (error) => {console.log(error)}
    )
    console.log(this.orderService.getOrderJson())
  }
}
