import { Injectable } from '@angular/core';
import {
  ItemStatus,
  MenuItemDto,
  OrderDto,
  OrderItemDto,
  UserDto,
  UserRoleDto,
} from '../models/models';

// export class Item {
//   menuItemId: number;
//   name: string;
//   price: number;
//   category: string;
//   quantity: number;
//   itemStatus: ItemStatus;
//   constructor(
//     menuItemId: number,
//     name: string,
//     price: number,
//     category: string,
//     quantity: number,
//     itemStatus: ItemStatus
//   ) {
//     this.menuItemId = menuItemId;
//     this.name = name;
//     this.price = price;
//     this.category = category;
//     this.quantity = quantity;
//     this.itemStatus = itemStatus;
//   }
// }

// export class Order {
//   items: Map<string, Item>;
//   totalAmount: number;
//   grandTotal: number;

//   constructor(items: Map<string, Item>, totalAmount: number) {
//     this.items = items;
//     this.totalAmount = totalAmount;
//     this.grandTotal = totalAmount * 1.07;
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private order: OrderDto = new OrderDto([], 0);

  constructor() {}
  getOrder(): OrderDto {
    return this.order;
  }
  // argument Quantity is either +1 or -1 which indicates increamented or decremented
  updateOrder(menuItem: MenuItemDto, quantity: any) {
    let orderItem: OrderItemDto;
    const orderItemTemp = this.order.orderItemsDto
    .find((orderItem: OrderItemDto) => orderItem.menuItemDto.menuItemId == menuItem.menuItemId)

    if (orderItemTemp) {
      orderItemTemp.quantity += quantity;
      if (orderItemTemp.quantity == 0) {
        // this.order.items.delete(menuItem.menuItemId);
        this.order.orderItemsDto = this.order.orderItemsDto
        .filter((orderItem:OrderItemDto) => orderItem.menuItemDto.menuItemId != menuItem.menuItemId);

      }
    } else {
      // const menuItem = new MenuItemDto()
      orderItem = new OrderItemDto(menuItem, 1, ItemStatus.YET_TO_PREPARE);
      this.order.orderItemsDto.push(orderItem);
    }
    this.order.totalAmount += quantity * menuItem.price *1.07;
    // this.order.grandTotal = this.order.totalAmount * 1.07;

    console.log(this.order);
  }

  getOrderJson() {
    // const items = [...this.order.items.values()];
    // const orderItemsDto: OrderItemDto[] = [];
    // items.forEach((item) => {
    //   const menuItemDto: MenuItemDto = new MenuItemDto(
    //     item.menuItemId,
    //     item.price,
    //     item.category,
    //     item.name
    //   );
    //   const tempOrderItemDto: OrderItemDto = new OrderItemDto(
    //     menuItemDto,
    //     item.quantity,
    //     'YET_TO_PREPARE'
    //   );
    //   orderItemsDto.push(tempOrderItemDto);
    // });
    // const orderItemDto : OrderItemDto = new OrderItemDto(1,menuItemsDto,this.)

    const userRoleDto: UserRoleDto = new UserRoleDto(this.getRoleFromSessionStorage());
    const userDto: UserDto = new UserDto(this.getMobileFromSessionStorage(), userRoleDto);
    // const placeorder: OrderDto = new OrderDto(
    //   userDto,
    //   orderItemsDto,
    //   this.order.totalAmount
    // );
    this.order.userDto = userDto;

    console.log(this.order);
    return this.order;
    // return {items,totalAmount: this.order.totalAmount, grandTotal: this.order.grandTotal };
  }

  getMobileFromSessionStorage(): number {
    const mobile = sessionStorage.getItem("mobile");
    if(mobile) {
      return parseInt(mobile);
    } else {
      throw new Error("mobile number is not in session storage");
    }
  }

  getRoleFromSessionStorage(): string {
    const role = sessionStorage.getItem("role");
    if(role) {
      return role;
    } else {
      throw new Error("role is not in session storage");
    }
  }
}
