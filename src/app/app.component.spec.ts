// Given
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component'; // What comp taken up testing
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuListComponent } from './shared/components/menu-list/menu-list.component';

// * How to write tests?
// * Where to write tests and in what syntax?
// Testing Pattern: Given/When/Then
// TEST SUITE = group of related test specs
describe('AppComponent', () => {
  // what comp are we testing

  // Setup
  beforeEach(() =>
    TestBed.configureTestingModule({
      // similar to app module
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MenuListComponent
      ]
    })
  );

  // test case a.k.a test spec -- 'it' is an api coming from JasmineJS
  it('should have proper app component', () => {
    // When
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // we are taking up comp's ts for testing

    // Then (assert)
    // expect is from Jasmine | toBeDefined - is a matcher from Jasmine
    expect(app).toBeDefined();
  });

  // test spec #2
  it('should have a variable title with value being Employee Manager!', () => {
    // When
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // we are taking up comp class for testing

    expect(app.title).toBe('Employee Manager!');
  });
});
