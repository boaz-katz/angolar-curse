import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'this is simply test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'test recipe 2',
      'this is simply test 2',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
  ];
  @Output() chusenrecipe = new EventEmitter<Recipe>();
  onSelectresipe(recipe: Recipe) {
    this.chusenrecipe.emit(recipe);
  }
  constructor() {}

  ngOnInit(): void {}
}
