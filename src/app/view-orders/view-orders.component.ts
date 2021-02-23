import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  customerName: string;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.customerName = this.orderService.getOrders()[0].customerName;
  }

}
