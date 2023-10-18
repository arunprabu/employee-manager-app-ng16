import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{
  defaultColor = 'rgb(211, 211, 211)'; // lightgrey
  @Input('appHighlight') bgColor = '';

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.customProperty = true;
  }

  ngOnChanges() {
    this.elementRef.nativeElement.style.backgroundColor =
      this.bgColor || this.defaultColor;
  }
}
