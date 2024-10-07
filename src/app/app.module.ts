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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MobileNumberDirective } from './directives/mobile-number.directive';
import { QuantityCalculatorComponent } from './components/quantity-calculator/quantity-calculator.component';
import { CardComponent } from './components/card/card.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { PortalComponent } from './components/portal/portal.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminMenuItemsComponent } from './components/admin-menu-items/admin-menu-items.component';
import { CustModalComponent } from './components/cust-modal/cust-modal.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { LoginUserIntercepterService } from './interceptors/login-user-intercepter.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponentComponent } from './components/alert-component/alert-component.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

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
    AdminMenuItemsComponent,
    CustModalComponent,
    ItemFormComponent,
    AdminOrdersComponent,
    AlertComponentComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : LoginUserIntercepterService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
