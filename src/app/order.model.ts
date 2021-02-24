import { Injectable } from "@angular/core";
import { DeliveryAddress } from "./delivery-address";
import { OrderDetails } from "./order-details.model";
import { StatusOfOrder } from "./order-status.enum";

@Injectable()
export class Order {

    constructor(public orderId: number,
                public customerName: string, 
                public totalNoOfItems: number, 
                public totalAmount: number, 
                public statusOfOrder: StatusOfOrder,
                public orderDetails: OrderDetails[],
                public deliveryAddress: DeliveryAddress) {}
}