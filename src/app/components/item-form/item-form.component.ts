import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit{

  constructor(private ngbActiveModal : NgbActiveModal){}
  ngOnInit(): void {
    console.log(this.itemData)
    if(this.itemData) {
      this.itemForm = this.getUpdateForm(this.itemData);
    } else {
      this.itemForm = this.getCreateForm();
    }
  }

  @Input('itemData') itemData : any = null;

  itemForm : FormGroup = new FormGroup({});

  getCreateForm() {
    return new FormGroup(
      {
        itemName : new FormControl("",[Validators.required]),
        itemCategory : new FormControl("",[Validators.required]),
        itemPrice :  new FormControl("",[Validators.required])
      }
    );
  }

  getUpdateForm(data:any) {
    return new FormGroup(
      {
        itemName : new FormControl(data.name,[Validators.required]),
        itemCategory : new FormControl(data.category,[Validators.required]),
        itemPrice :  new FormControl(data.price,[Validators.required])
      }
    );
  }

  onSave(){
    console.log(this.itemForm);
    const item = {
      name: this.itemForm.controls['itemName'].value,
      price: this.itemForm.controls['itemPrice'].value,
      category: this.itemForm.controls['itemCategory'].value
    }
    this.ngbActiveModal.close(item);
  }  
  
  onClose(){
    console.log(this.itemForm);
    this.ngbActiveModal.dismiss();
  }

}
