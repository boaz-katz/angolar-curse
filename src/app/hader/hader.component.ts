import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-hader',
  templateUrl: './hader.component.html',
  styleUrls: ['./hader.component.css'],
})
export class HaderComponent implements OnInit {
  @Output() navigetor = new EventEmitter<string>();

  constructor() {}
  navigatorfunc(nav: string) {
    this.navigetor.emit(nav);
  }
  ngOnInit(): void {}
}
