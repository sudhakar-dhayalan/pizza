import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { OrderService } from './order.service';
import { OrderListItemComponent } from './view-orders/order-list-item/order-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderComponent,
    ViewOrdersComponent,
    OrderListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
