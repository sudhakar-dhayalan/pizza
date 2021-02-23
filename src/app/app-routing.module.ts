import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/view-orders', pathMatch: 'full' },
  {path: 'view-orders', component: ViewOrdersComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
