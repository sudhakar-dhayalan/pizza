import { Injectable } from "@angular/core";
import { StatusOfOrder } from "./order-status.enum";
import { Order } from "./order.model";

@Injectable()
export class OrderService {

    id = 0;
    private orders: Order[] = [
        new Order(++this.id, "sudhakar", 10, 100, StatusOfOrder.OrderRecieved),
        new Order(++this.id, "someone", 10, 200, StatusOfOrder.OrderRecieved),
    ];

    getOrders(): Order[] {
        return this.orders;
    }

    getOrderByOrderId(ordId: number): Order {
        return this.orders[--ordId];
    }
}