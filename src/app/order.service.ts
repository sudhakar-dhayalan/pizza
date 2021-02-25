import { Injectable } from "@angular/core";
import { DeliveryAddress } from "./delivery-address";
import { OrderDetails } from "./order-details.model";
import { StatusOfOrder } from "./order-status.enum";
import { Order } from "./order.model";

@Injectable()
export class OrderService {

    id = 0;
    private orders: Order[] = [
        
        new Order(
            ++this.id, 
            "sudhakar dhayalan", 
            2, 
            300, 
            StatusOfOrder.OrderRecieved,
            [
              new OrderDetails("veg pizza", 100, 1),
              new OrderDetails("chicken pizza", 200, 1)
            ],
            new DeliveryAddress(
              "123", 
              "Some Street", 
              "KR Puram", 
              "KR Puram",
              "Karnataka",
              533005,
              "India"
            )
        ),
        new Order(
            ++this.id, 
            "someone someone", 
            2, 
            350, 
            StatusOfOrder.OrderRecieved,
            [
              new OrderDetails("veg pizza", 100, 1),
              new OrderDetails("chicken pizza", 250, 1)
            ],
            new DeliveryAddress(
              "98", 
              "10th cross", 
              "Marathalli", 
              "Whitefield",
              "Karnataka",
              630908,
              "India"
            )
        ),
    ];

    getOrders(): Order[] {
        return this.orders;
    }

    getOrderByOrderId(ordId: number): Order {
        return this.orders[--ordId];
    }
}