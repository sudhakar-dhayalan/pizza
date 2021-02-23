import { Injectable } from "@angular/core";
import { STATUSOFORDER } from "./order-status.constant";
import { Order } from "./order.model";

@Injectable()
export class OrderService {

    private orders: Order[] = [
        new Order("sudhakar", 10, 100, STATUSOFORDER.OrderRecieved),
        new Order("someone", 10, 200, STATUSOFORDER.OrderRecieved),
    ];

    getOrders(): Order[] {
        return this.orders;
    }

}