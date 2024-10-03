import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  show: boolean = false;
  message: string = '';
  constructor() { }

  showAlert(message: string) {
    this.message= message;
    this.show = true;
    setTimeout(() => {this.show = false}, 5000)
  }
}
