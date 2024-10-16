import { TestBed } from '@angular/core/testing';

import { OrderStatusWebsocketService } from './order-status-websocket.service';

describe('OrderStatusWebsocketService', () => {
  let service: OrderStatusWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderStatusWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
