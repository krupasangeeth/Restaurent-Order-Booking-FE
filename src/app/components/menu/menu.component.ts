import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
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
  return this.dbService.getData('items').filter((item : any)=>{
    return item.category == this.category;
  });
}

constructor(private activatedRoute: ActivatedRoute,
  private httpclient : HttpClient,
  private dbService : DbService,
  private orderService : OrderService
) {}

ngOnInit(): void {
}

onQuantityChange(e:number, item:any) {
  this.orderService.updateOrder(item,e);
}

}
