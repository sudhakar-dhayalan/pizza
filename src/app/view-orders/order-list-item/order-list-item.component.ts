import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusOfOrder } from 'src/app/order-status.enum';
import { Order } from 'src/app/order.model';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {

  orderdetails = "order-details";

  @Input("orderItem") orderItem: Order;
  constructor(private router: Router,
              private orderService: OrderService) { }

  ngOnInit(): void {
  }

  changeOrderStatus() {
    let isNextKey = false;
    let nextKey = Object.keys(StatusOfOrder).find(key => {
      if(isNextKey) return key;
      isNextKey = StatusOfOrder[key] === this.orderItem.statusOfOrder ? true : false;
    });
    this.orderItem.statusOfOrder = StatusOfOrder[nextKey];
  }

  showOrderDetails() {
    // let id = this.orderService.isOrderIdPresent(this.orderItem.orderId);
    // if(!id)
    //   this.router.navigate(["/page-not-found"]);

    this.router.navigate(["/view-orders", "order-details", this.orderItem.orderId]);
  }
  
}
