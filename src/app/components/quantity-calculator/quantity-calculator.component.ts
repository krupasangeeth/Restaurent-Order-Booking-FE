import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-calculator',
  templateUrl: './quantity-calculator.component.html',
  styleUrls: ['./quantity-calculator.component.css']
})
export class QuantityCalculatorComponent {

  @Output('quantity') quantityEmitter: EventEmitter<number> = new EventEmitter();
  @Input('orderedQuantity') quantity!:number;


  quantityIncrease(){
    // console.log(item.quantity)
    // this.items[i].quantity ++;
    this.quantity++;
    this.quantityEmitter.emit(1);
  }
  quantityDecrease(){
    // if(this.items[i].quantity > 0)
    // this.items[i].quantity --;
    if(this.quantity>0){
      this.quantity--;
      this.quantityEmitter.emit(-1);
    }
  }

  getQuantity(): number {
    return this.quantity;
  }
}
