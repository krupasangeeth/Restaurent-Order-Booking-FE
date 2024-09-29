import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryComponent } from './components/category/category.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { PortalComponent } from './components/portal/portal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'orderstatus', component: OrderStatusComponent },
  { path: 'portal', component: PortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
