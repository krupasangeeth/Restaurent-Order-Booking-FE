import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryComponent } from './components/category/category.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { PortalComponent } from './components/portal/portal.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminMenuItemsComponent } from './components/admin-menu-items/admin-menu-items.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminGaurdService } from './services/admin-gaurd.service';
import { ErrorComponent } from './components/error/error.component';
import { LoginGaurdService } from './services/login-gaurd.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent, canActivate: [LoginGaurdService] },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [LoginGaurdService],
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [LoginGaurdService],
  },
  {
    path: 'orderstatus',
    component: OrderStatusComponent,
    canActivate: [LoginGaurdService],
  },
  {
    path: 'portal',
    component: PortalComponent,
    canActivate: [LoginGaurdService],
  },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    canActivate: [LoginGaurdService, AdminGaurdService],
  },
  {
    path: 'adminmenuitems',
    component: AdminMenuItemsComponent,
    canActivate: [LoginGaurdService, AdminGaurdService],
  },
  {
    path: 'adminorders',
    component: AdminOrdersComponent,
    canActivate: [LoginGaurdService, AdminGaurdService],
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
