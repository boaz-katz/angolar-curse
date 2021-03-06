import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 3),
    new Ingredient('tomatoes', 6),
  ];
  constructor() {}
  onAdditem(value: Ingredient) {
    this.ingredients.push(value);
  }
  ngOnInit(): void {}
}
