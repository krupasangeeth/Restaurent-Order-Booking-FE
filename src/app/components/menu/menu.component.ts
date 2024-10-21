import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MenuItemDto, OrderDto, OrderItemDto } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('category') category!: string
  items !: any[];

getItems():any[] {
  const items : [] = <[]>this.dataService.getData('menuitems');
  return items.filter((item : any)=>{
    return item.category == this.category;
  });
}

constructor(private activatedRoute: ActivatedRoute,
  private httpclient : HttpClient,
  private apiService : ApiService,
  private orderService : OrderService,
  private dataService : DataService
) {
  
}

getQuantityFromOrder(menuItem : MenuItemDto){
  const orderedItem = this.orderService.getOrder().orderItemsDto
  // .get(item.menuItemId);
  .find((orderItem : OrderItemDto) => orderItem.menuItemDto.menuItemId == menuItem.menuItemId );
  return orderedItem ? orderedItem.quantity : 0;
}

ngOnInit(): void {
  
}

onQuantityChange(e:number, menuItem:MenuItemDto) {
  this.orderService.updateOrder(menuItem,e);
}

}
