import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { OrderDto } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  order: OrderDto;
  constructor(private orderService: OrderService, private router: Router, private httpClient: HttpClient, private apiService: ApiService) {
    this.order = this.orderService.getOrder();
  }

  getGST(): string {
    return (this.order.totalAmount - (this.order.totalAmount / 1.07) ).toFixed(2);
  }

  getGrandTotal() {
    return (this.order.totalAmount).toFixed(2);
  }

  onAddMoreItems() {
    this.router.navigate(['/category']);
  }

  onConfirmOrder() {
    console.log(this.orderService.getOrderJson())

    this.apiService.postApi('order', this.orderService.getOrderJson()).subscribe(
      (res) => {
        console.log("order saved");
        this.router.navigate(['/orderstatus'])
      },
      (error) => {console.log(error)}
    )

  }
}
