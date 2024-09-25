import { Injectable } from '@angular/core';

class Item{
  id: number;
  name: string;
  price: number;
  category: string;
  quantity : number;

   constructor( id: number,name: string,price: number,category: string, quantity : number){
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
   }

}

class Order {
  items: Map<string,Item>;
  totalAmount: number;

  constructor(items:Map<string,Item>, totalAmount: number){
    this.items = items;
    this.totalAmount = totalAmount;
  }
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order: Order = new Order(new Map(), 0);

  constructor() { }

  updateOrder(item:any, quantity:any) {
    let orderItem: Item ;
    const orderItem1 = this.order.items.get(item.id);

    if(orderItem1)
      orderItem1.quantity += quantity;
    else{
      orderItem = new Item(item.id, item.name, item.price, item.category, 1);
      this.order.items.set(item.id,orderItem);
    }
    this.order.totalAmount += quantity * item.price;
    
    console.log(this.order);
  }
}
