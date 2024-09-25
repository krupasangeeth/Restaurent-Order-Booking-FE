import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private restaurentName : String = "Mumtaaz";

  getRestaurentName(){
    return this.restaurentName;
  }

}
