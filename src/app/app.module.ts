import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaymentComponent } from './components/payment/payment.component';
import { StatusComponent } from './components/status/status.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MobileNumberDirective } from './directives/mobile-number.directive';
import { QuantityCalculatorComponent } from './components/quantity-calculator/quantity-calculator.component';
import { CardComponent } from './components/card/card.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { PortalComponent } from './components/portal/portal.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminMenuItemsComponent } from './components/admin-menu-items/admin-menu-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    MenuComponent,
    PaymentComponent,
    StatusComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    MobileNumberDirective,
    QuantityCalculatorComponent,
    CardComponent,
    OrderStatusComponent,
    PortalComponent,
    AdminDashboardComponent,
    AdminMenuItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
