import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  showMenu : boolean = false;

  @Input("category") category !: string;

  onCategorySelection(){
    this.showMenu=!this.showMenu;
  }

}