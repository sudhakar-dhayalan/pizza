import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private router: Router) { }

  order: Order;            
  ngOnInit(): void {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    this.order = this.orderService.getOrderByOrderId(id);
    if(!this.order)
      this.router.navigate(["/page-not-found"]);
    console.log(this.order);
  }

}
