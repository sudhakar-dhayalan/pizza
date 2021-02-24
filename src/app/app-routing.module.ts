import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderListItemComponent } from './view-orders/order-list-item/order-list-item.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/view-orders', pathMatch: 'full' },
  { path: 'view-orders/order-details/:id', component: OrderDetailsComponent },
  { path: 'view-orders', component: ViewOrdersComponent },
  { path: 'order', component: OrderComponent },
  { path: 'page-not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/view-orders' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  OrderComponent,
  ViewOrdersComponent,
  OrderDetailsComponent,
  OrderListItemComponent,
  PageNotFoundComponent
];