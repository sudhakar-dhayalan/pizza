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
            10, 
            100, 
            StatusOfOrder.OrderRecieved,
            [
              new OrderDetails("veg pizza", 100, 1),
              new OrderDetails("chicken pizza", 200, 1)
            ],
            new DeliveryAddress(
              "73", 
              "Big Street", 
              "Marudampakkam", 
              "Ranipet",
              "TamilNadu",
              632405,
              "India"
            )
        ),
        new Order(
            ++this.id, 
            "someone someone", 
            20, 
            200, 
            StatusOfOrder.OrderRecieved,
            [
              new OrderDetails("veg pizza", 100, 1),
              new OrderDetails("chicken pizza", 200, 1)
            ],
            new DeliveryAddress(
              "234", 
              "2nd cross", 
              "HRBR", 
              "Kalyanagar",
              "Karnataka",
              632408,
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