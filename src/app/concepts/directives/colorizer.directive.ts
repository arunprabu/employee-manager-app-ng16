import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {
  baseElement: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('Inside ColorizerDirective');

    // 1. find the element in which the appColorizer directive is used using ElementRef
    console.log(this.elementRef.nativeElement);
    this.baseElement = this.elementRef.nativeElement;

    // 2. change the bg color and text color using JS -[NOT RECOMMENDED]
    // this.baseElement.style.backgroundColor = 'red';
    // this.baseElement.style.color = '#fff';

    this.colorizeElement();
    this.renderParaElement();
  }

  colorizeElement() {
    // The following is recommended
    this.renderer.setStyle(this.baseElement, 'background-color', 'red');
    this.renderer.setStyle(this.baseElement, 'color', '#fff');
    this.renderer.setStyle(this.baseElement, 'padding', '20px');
  }

  renderParaElement() {
    // <p></p>
    const newPara = this.renderer.createElement('p');
    // <p style='float: right;'></p>
    this.renderer.setStyle(newPara, 'float', 'right');
    // <p style='float: right;font-size: 12px'></p>
    this.renderer.setStyle(newPara, 'font-size', '12px');

    const poweredByText = this.renderer.createText(
      'Powered By Colorizer Directive'
    );
    // <p style='float: right;font-size: 12px'>Powered By Colorizer Directive</p>
    this.renderer.appendChild(newPara, poweredByText);
    this.renderer.appendChild(this.baseElement, newPara);
  }

  // Handle the event inside directive -- click
  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    console.log(event.target);
    this.renderer.setStyle(event.target, 'background-color', 'yellow');
    this.renderer.setStyle(event.target, 'color', '#000');
  }

  // TODO: try mouseover -- change the bg color
  // TODO: try mouseout -- change the bg color
  // TODO: Learn about @HostBinding()
  // TODO: try handling values of the attribute directive
  // Ref: https://github.com/arunprabu/employee-mgmt-ng-oct2022/blob/master/src/app/unit-testing-demo/directives/highlight.directive.ts 

}
