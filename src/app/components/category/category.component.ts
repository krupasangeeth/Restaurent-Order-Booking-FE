import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: string[] = ['VEG', 'NON_VEG', 'DESSERTS'];
  selectedCategory!: string;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private orderService: OrderService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.apiService.getApi('menuitems').subscribe((res: any) => {
      this.dataService.setdata(res, 'menuitems');
      console.log(res);
    });
  }
  getTotalAmount(): number {
    return this.orderService.getOrder().totalAmount;
  }
  onPlaceOrder() {
    this.router.navigate(['/payment']);
  }
}
