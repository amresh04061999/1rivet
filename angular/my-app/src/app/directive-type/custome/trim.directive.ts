import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

  constructor(
    private el: ElementRef
  ) { }
  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;
    const valueTrim = value.trim();
    if(value !== valueTrim) {
      this.el.nativeElement.value = valueTrim;
    }
  }
}
