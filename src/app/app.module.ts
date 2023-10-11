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
import { HttpClientModule } from '@angular/common/http';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './shared/components/header/cart/cart.component';

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
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EmployeesModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // bootstrapping AppComponent as the root component
})
export class AppModule { }
