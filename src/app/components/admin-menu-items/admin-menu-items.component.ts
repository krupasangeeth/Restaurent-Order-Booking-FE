import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { ItemFormComponent } from '../item-form/item-form.component';
import { MenuItemDto } from 'src/app/models/models';
import { ToastrService } from 'ngx-toastr';

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
    private ngbModal : NgbModal,
    private toastrService : ToastrService
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
    // this.openModal=true;
    const itemFormComponentRef = this.ngbModal.open(ItemFormComponent, {size :'lg', backdrop:'static'});
    itemFormComponentRef.componentInstance.itemData = item;
    itemFormComponentRef.result.then(
      (res) => {
        console.log(res);
        const itemDto = new MenuItemDto(item.menuItemId, parseInt(res.price), res.category, res.name);
        this.apiService.postApi('menuitem', itemDto).subscribe(
          (postRes) => {
            console.log(postRes);
            // this.alertService.showAlert("Menu item updated");
            this.toastrService.info("Menu item updated");
            this.getMenuItemsfromDb();
          }
        );
      }
    )
    .catch((err) => console.log(err))
  }

  onDelete(id : number){
    this.apiService.deleteApi('menuitem',{menuItemId : id})
    .subscribe(
      (res) => {
        this.getMenuItemsfromDb();
        console.log(res)
        this.toastrService.info("Item Deleted");
      },
      (err) => this.toastrService.error("err")

    );

  }


}
