import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDropdowe]',
  exportAs: 'appDropdowe',
})
export class DropdoweDirective {
  constructor(
    // private templateRef: TemplateRef<any>,
    // private viewContainer: ViewContainerRef
    private elementref: ElementRef
  ) {}
  // @HostListener('click') onClick() {
  //   this.elementref.nativeElement.style.color = 'red';
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.elementref.nativeElement.style.color = 'initial';
  // }
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleopen() {
    this.isOpen = !this.isOpen;
  }
}
