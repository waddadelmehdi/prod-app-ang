import { Component,signal,computed,effect } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  price : number =8000;
  quantity = signal<number>(1);
  total = computed(()=>this.price*this.quantity());
  counter = signal(0);

  constructor() {
    effect(() => {
      console.log("Quantity => "+this.quantity());
      console.log("Montant => "+this.total());
      this.counter.set(4);

    },{allowSignalWrites: true});
  }

  decrement() {
    this.quantity.update(value => value-1)
  }

  increment() {
    this.quantity.update(value => value+1)
  }
}
