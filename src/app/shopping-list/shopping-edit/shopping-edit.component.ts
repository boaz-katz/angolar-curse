import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/share/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() newshopingitem = new EventEmitter<Ingredient>();

  onAdd(name: HTMLInputElement, amount: HTMLInputElement) {
    this.newshopingitem.emit({
      name: name.value,
      amount: parseInt(amount.value),
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
