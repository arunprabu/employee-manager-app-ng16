import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let wrapper: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    wrapper = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing inline Styles
  it('should have yellow bg color in h2 element', () => {
    const bgColor = wrapper.querySelector('h2')?.style.backgroundColor;
    console.log(bgColor);
    expect(bgColor).toBe('rgb(255, 255, 0)'); // recommended way is to mention the color code in rgb
  });

  // TODO: Testing CSS Class -- find out btn class in button element

  it('has counter with initial value 0', () => {
    expect(component.counter).toEqual(0);
  });

  it('should increment counter value correctly', () => {
    expect(component.counter).toEqual(0);
    component.handleIncrement(); // calling the event handler method directly
    expect(component.counter).toEqual(1);
    component.handleIncrement(); // calling the event handler method directly
    component.handleIncrement(); // calling the event handler method directly
    expect(component.counter).toEqual(3);
  });

  // TODO: should decrement counter value correctly

  // Let's the events
  it('should increment counter and update in html when increment button in clicked', () => {
    // find out the increment button from html template
    // trigger the click/emit the click event
    fixture.debugElement
      .query(By.css('.increment-btn'))
      .triggerEventHandler('click', null);

    // then, check in html by finding the paragraph which display counter value
    // expect(component.counter).toEqual(1);
    fixture.detectChanges(); // detect the changes in HTML
    // along with it, let's check whether it is updated in html
    // approach #1
    // const counterText = wrapper.querySelector('p.counter-text')?.textContent;
    // expect(counterText).toBe('Counter Value: 1');

    // approach #2
    const counterHtmlText = fixture.debugElement.query(By.css('p.counter-text'))
      ?.nativeElement.innerText;
    expect(counterHtmlText).toBe('Counter Value: 1');
  });

  // TODO: should decrement counter and update in html when decrement button in clicked
  
});
