import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'corse-project';
  lodepge: string;
  constructor() {
    this.lodepge = 'app-recipes';
  }
  navigetor(page: string) {
    this.lodepge = page;
  }
}
