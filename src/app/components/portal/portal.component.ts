import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
  constructor(private router : Router){

  }
  onUserClick(){
    this.router.navigate(['/category']);
  }
  onAdminClick(){
    this.router.navigate(['/admindashboard']);
  }
}
