import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/order.model';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {

  @Input("orderItem") orderItem: Order;
  constructor() { }

  ngOnInit(): void {
  }

}
