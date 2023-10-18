import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';

// 1. Create a mock component 
// which has elements with appHighligh directive in its html 
@Component({
  template: `
    <div id="myDiv1" appHighlight>My div 1</div>
    <div id="myDiv2" appHighlight="pink">My div 2</div>
    <div id="myDiv3" appHighlight="purple">My div 3</div>
    <div id="myDiv4">My div 4 - Directive not used</div>
  `
})
class MockComponent {}

// 2. Test whether the element in the above comp is getting bg color or not
describe('HighlightDirective', () => {
  let fixture: ComponentFixture<MockComponent>;

  // 2.1 preparing MockComponent for testing -- loading it into the test bed
  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [MockComponent, HighlightDirective]
    });
    fixture = TestBed.createComponent(MockComponent);
    fixture.detectChanges();
  });

  // Step 2.2 test whether the div element of MockComponent has bg color
  it('has div with bg color lightgrey', () => {
    const wrapperDiv: HTMLElement = fixture.nativeElement.querySelector('#myDiv1');
    const bgColor = wrapperDiv.style.backgroundColor;
    expect(bgColor).toBe('rgb(211, 211, 211)');
  });

  it('has div with bg color pink', () => {
    const wrapperDiv: HTMLElement =
      fixture.nativeElement.querySelector('#myDiv2');
    const bgColor = wrapperDiv.style.backgroundColor;
    expect(bgColor).toBe('pink');
  });

  it('has div with bg color purple', () => {
    const wrapperDiv: HTMLElement =
      fixture.nativeElement.querySelector('#myDiv3');
    const bgColor = wrapperDiv.style.backgroundColor;
    expect(bgColor).toBe('purple');
  });

  // Negative spec
   it('has div with no bg color', () => {
     const wrapperDiv: HTMLElement =
       fixture.nativeElement.querySelector('#myDiv4');
     const bgColor = wrapperDiv.style.backgroundColor;
     expect(bgColor).toBe('');
   });
});
