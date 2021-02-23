import { Injectable } from "@angular/core";
import { StatusOfOrder } from "./order-status.constant";
import { Order } from "./order.model";

@Injectable()
export class OrderService {

    private orders: Order[] = [
        new Order("sudhakar", 10, 100, StatusOfOrder.OrderRecieved),
        new Order("someone", 10, 200, StatusOfOrder.OrderRecieved),
    ];

    getOrders(): Order[] {
        return this.orders;
    }

}