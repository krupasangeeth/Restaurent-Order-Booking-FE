import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-menu-items',
  templateUrl: './admin-menu-items.component.html',
  styleUrls: ['./admin-menu-items.component.css']
})
export class AdminMenuItemsComponent implements OnInit {

  constructor(private apiService : ApiService,
    private dataService :DataService
  ){}
  
  ngOnInit(): void {
    this.getMenuItemsfromDb();
  }

  getMenuItemsfromDb(){
    this.apiService.getApi('menuitems')
    .subscribe((res) => {
      this.dataService.setdata(res,'menuitems');
    });
  } 

  get MenuItems() : any[]{
    return this.dataService.getData('menuitems') as any[];
  }

  onUpdate(item : any){
    // this.apiService.postApi('menuitem',)
  }

  onDelete(id : number){
    this.apiService.deleteApi('menuitem',{menuItemId : id})
    .subscribe(
      (res) => {
        this.getMenuItemsfromDb();
        console.log(res)
      },
      (err) => console.log(err)
    );

  }


}
