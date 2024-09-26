import { Injectable } from '@angular/core';

export class Item {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;

  constructor(
    id: number,
    name: string,
    price: number,
    category: string,
    quantity: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
  }
}

export class Order {
  items: Map<string, Item>;
  totalAmount: number;

  constructor(items: Map<string, Item>, totalAmount: number) {
    this.items = items;
    this.totalAmount = totalAmount;
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
      orderItem = new Item(item.id, item.name, item.price, item.category, 1);
      this.order.items.set(item.id, orderItem);
    }
    this.order.totalAmount += quantity * item.price;

    console.log(this.order);
  }
}
