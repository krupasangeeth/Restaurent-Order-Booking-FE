import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cust-modal',
  templateUrl: './cust-modal.component.html',
  styleUrls: ['./cust-modal.component.css']
})
export class CustModalComponent {
  @Output('closeEvent') closeEvent : EventEmitter<any> = new EventEmitter(); 
  close(){
    this.closeEvent.emit();
  }
}
