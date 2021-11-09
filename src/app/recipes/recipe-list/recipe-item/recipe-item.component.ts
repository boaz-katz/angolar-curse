import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipes.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any;
  @Output() selectrespi = new EventEmitter<void>();
  constructor() {}
  onClikrecipe() {
    this.selectrespi.emit();
  }
  ngOnInit(): void {}
}
