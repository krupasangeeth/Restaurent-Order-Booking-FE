import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  order: Order;
  constructor(private orderService: OrderService, private router: Router) {
    this.order = this.orderService.getOrder();
  }

  getGST(): string {
    return (this.order.totalAmount * 0.07).toFixed(2);
  }

  getGrandTotal() {
    return (this.order.totalAmount + this.order.totalAmount * 0.07).toFixed(2);
  }

  onAddMoreItems() {
    this.router.navigate(['/category']);
  }
}
