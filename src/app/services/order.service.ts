import { Injectable } from '@angular/core';

export enum ItemStatus {
  YET_TO_PREPARE = 'Yet to prepare',
  BEING_PREPARED = 'Being prepared...',
  PREPARED = 'Prepared'
}
export class Item {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  itemStatus: ItemStatus;
  constructor(
    id: number,
    name: string,
    price: number,
    category: string,
    quantity: number,
    itemStatus: ItemStatus
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
    this.itemStatus = itemStatus
  }
}

export class Order {
  items: Map<string, Item>;
  totalAmount: number;
  grandTotal: number;

  constructor(items: Map<string, Item>, totalAmount: number) {
    this.items = items;
    this.totalAmount = totalAmount;
    this.grandTotal = totalAmount * 1.07;
  }
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private order: Order = new Order(new Map(), 0);

  constructor() {}
  getOrder(): Order {
    return this.order;
  }
  // argument Quantity is either +1 or -1 which indicates increamented or decremented
  updateOrder(item: any, quantity: any) {
    let orderItem: Item;
    const orderItemTemp = this.order.items.get(item.id);

    if (orderItemTemp) {
      orderItemTemp.quantity += quantity;
      if (orderItemTemp.quantity == 0) {
        this.order.items.delete(item.id);
      }
    } else {
      orderItem = new Item(item.id, item.name, item.price, item.category, 1, ItemStatus.YET_TO_PREPARE);
      this.order.items.set(item.id, orderItem);
    }
    this.order.totalAmount += quantity * item.price;
    this.order.grandTotal = this.order.totalAmount * 1.07;

    console.log(this.order);
  }

  getOrderJson() {
    const items = [...this.order.items.values()];
    return {items,totalAmount: this.order.totalAmount, grandTotal: this.order.grandTotal };
  }
}
