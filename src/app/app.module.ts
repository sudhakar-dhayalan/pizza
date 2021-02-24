import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderService } from './order.service';
import { FirstLetterUpPipe } from './common/first-letter-up.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    FirstLetterUpPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
