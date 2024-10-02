import { Injectable } from '@angular/core';
import { MenuItemDto, OrderDto, OrderItemDto, UserDto, UserRoleDto } from '../models/models';

export enum ItemStatus {
  YET_TO_PREPARE = 'Yet to prepare',
  BEING_PREPARED = 'Being prepared...',
  PREPARED = 'Prepared'
}



export class Item {
  menuItemId: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  itemStatus: ItemStatus;
  constructor(
    menuItemId: number,
    name: string,
    price: number,
    category: string,
    quantity: number,
    itemStatus: ItemStatus
  ) {
    this.menuItemId = menuItemId;
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
    const orderItemTemp = this.order.items.get(item.menuItemId);

    if (orderItemTemp) {
      orderItemTemp.quantity += quantity;
      if (orderItemTemp.quantity == 0) {
        this.order.items.delete(item.menuItemId);
      }
    } else {
      orderItem = new Item(item.menuItemId, item.name, item.price, item.category, 1, ItemStatus.YET_TO_PREPARE);
      this.order.items.set(item.menuItemId, orderItem);
    }
    this.order.totalAmount += quantity * item.price;
    this.order.grandTotal = this.order.totalAmount * 1.07;

    console.log(this.order);
  }

  getOrderJson() {
    const items = [...this.order.items.values()];
    const orderItemsDto : OrderItemDto[] = [];
    items.forEach((item) => {
      const menuItemDto: MenuItemDto = new MenuItemDto(item.menuItemId,item.price,item.category,item.name);
      const tempOrderItemDto : OrderItemDto = new OrderItemDto(menuItemDto,item.quantity);
      orderItemsDto.push(tempOrderItemDto);
    })
    // const orderItemDto : OrderItemDto = new OrderItemDto(1,menuItemsDto,this.)
    const userRoleDto : UserRoleDto =  new UserRoleDto(10001,'ADMIN');
    const userDto : UserDto = new UserDto(8499858,userRoleDto);
    const placeorder : OrderDto = new OrderDto(userDto,orderItemsDto,this.order.totalAmount);
    console.log(placeorder);
    return placeorder;
    // return {items,totalAmount: this.order.totalAmount, grandTotal: this.order.grandTotal };
  }
}
