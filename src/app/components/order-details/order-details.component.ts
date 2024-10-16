import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderItemDto } from 'src/app/models/models';
import { OrderStatusWebsocketService } from 'src/app/services/order-status-websocket.service';
import { Order } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent {
  @Input('order') order!: any;
  @Output('orderStatusChange') orderStatusChange = new EventEmitter<any>();

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private soc: OrderStatusWebsocketService
  ) {}
  ngOnInit() {
    console.log(this.order);
  }

  onClose() {
    this.ngbActiveModal.dismiss();
  }

  onOrderStausChange(status: string, index: number) {
    // this.soc.sendMessage(status);
    const orderItemDto = this.order.orderItemsDto[index];
    console.log(status, index, this.order);
    this.orderStatusChange.emit({
      mobile: this.order.userDto.mobile,
      status: status,
      orderItemId: orderItemDto.orderItemId,
    });
  }
}
