import { Component, Input } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent {
  constructor(public alertService: AlertService){}
}
