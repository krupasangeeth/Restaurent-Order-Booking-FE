import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cust-modal',
  templateUrl: './cust-modal.component.html',
  styleUrls: ['./cust-modal.component.css']
})
export class CustModalComponent {
  @Output('closeEvent') closeEvent : EventEmitter<any> = new EventEmitter(); 
  @Input('openModal') openModal : boolean = false;
  constructor(){}

  close(){
    this.closeEvent.emit()
  }

}
