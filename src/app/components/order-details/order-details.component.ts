import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent {
  @Input('order') order!: any;

  constructor(private ngbActiveModal: NgbActiveModal) {}
  ngOnInit() {
    console.log(this.order);
  }

  onClose() {
    this.ngbActiveModal.dismiss();
  }
}
