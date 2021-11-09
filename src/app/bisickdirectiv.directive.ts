import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[textDirective]',
})
export class Bisickhilitest implements OnInit {
  constructor(private elementref: ElementRef) {}
  ngOnInit() {
    this.elementref.nativeElement.style.color = 'red';
  }
}
