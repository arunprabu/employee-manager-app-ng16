import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuListComponent } from './shared/components/menu-list/menu-list.component';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { AboutUsComponent } from './about-us/components/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './concepts/components/user-info/user-info.component';
import { ReportsComponent } from './concepts/components/reports/reports.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './shared/components/header/cart/cart.component';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { UnitTestingDemoComponent } from './unit-testing-demo/components/unit-testing-demo/unit-testing-demo.component';
import { CounterComponent } from './unit-testing-demo/components/counter/counter.component';
import { HighlightDirective } from './unit-testing-demo/directives/highlight.directive';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuListComponent,
    HomeComponent,
    ConceptsComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserInfoComponent,
    ReportsComponent,
    ColorizerDirective,
    CartComponent,
    UnitTestingDemoComponent,
    CounterComponent,
    HighlightDirective,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent] // bootstrapping AppComponent as the root component
})
export class AppModule { }
