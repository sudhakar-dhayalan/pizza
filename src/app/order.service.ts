import { Injectable } from "@angular/core";
import { DeliveryAddress } from "./delivery-address";
import { OrderDetails } from "./order-details.model";
import { StatusOfOrder } from "./order-status.enum";
import { Order } from "./order.model";

@Injectable()
export class OrderService {
  
    id = 0;
    orderDetails_1 = [
      new OrderDetails("Little Caesars Pizza", 200, 7),
      new OrderDetails("veg pizza", 99, 2),
      new OrderDetails("Peace of Pizza", 999, 4)
    ]
    orderDetails_2 = [
      new OrderDetails("Pepperoni Pizza", 99, 2),
      new OrderDetails("Meat pizza", 449, 3)
    ]
    orderDetails_3 = [
      new OrderDetails("Margherita Pizza", 100, 1),
      new OrderDetails("Meat pizza", 449, 4),
      new OrderDetails("Pepperoni Pizza", 599, 2),
      new OrderDetails("Sicilian Pizza", 200, 4)
    ]
    orderDetails_4 = [
      new OrderDetails("Pizza Castle", 100, 3),
      new OrderDetails("Peace of Pizza", 200, 4)
    ]
    orderDetails_5 = [
      new OrderDetails("Pepperoni Pizza", 100, 3),
      new OrderDetails("Sicilian Pizza", 200, 4)
    ]
    totalAmt = 0;
    private orders: Order[] = [
        new Order(
            ++this.id, 
            "sudhakar dhayalan", 
            this.calculateTotalNumOfItems(this.orderDetails_1), 
            this.calculateTotalAmount(this.orderDetails_1), 
            StatusOfOrder.OrderRecieved,
            this.orderDetails_1,
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
            this.calculateTotalNumOfItems(this.orderDetails_3), 
            this.calculateTotalAmount(this.orderDetails_3), 
            StatusOfOrder.OrderRecieved,
            this.orderDetails_3,
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
    isOrderIdPresent(ordId: number): number {
      let idNum: number = 0;
      this.orders.forEach((obj)=> {
          if(obj.orderId===ordId)
          idNum = ordId;
        } )
        return idNum;
    }
    calculateTotalAmount(orderDe: OrderDetails[]) {
      let a = this.orderDetails_1.map((obj)=> {
        return this.totalAmt += obj.price*obj.noOfItems;
      }).reduce((a,b)=> a+b);
      return a;
    }
    calculateTotalNumOfItems(orderDet: OrderDetails[]) {
      let output = 0;
      orderDet.forEach((obj) => output += obj.noOfItems);
      return output;
    }
}