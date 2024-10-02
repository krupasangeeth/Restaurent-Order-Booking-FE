import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-menu-items',
  templateUrl: './admin-menu-items.component.html',
  styleUrls: ['./admin-menu-items.component.css']
})
export class AdminMenuItemsComponent implements OnInit {
//  @ViewChild('modal',{read:ViewContainerRef}) modal !: ViewContainerRef;
  openModal : boolean = false;
  constructor(private apiService : ApiService,
    private dataService :DataService,
    private resolver : ComponentFactoryResolver,
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
    // this.resolver.resolveComponentFactory(item);
    this.openModal=true;
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
