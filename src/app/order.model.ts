import { Injectable } from "@angular/core";
import { StatusOfOrder } from "./order-status.constant";

@Injectable()
export class Order {
    customerName: string;
    noOfItems: number;
    totalAmount: number;
    statusOfOrder: StatusOfOrder

    constructor(custName: string, noOfItems: number, totalAmt: number, orderStatus: StatusOfOrder) {
        this.customerName = custName;
        this.noOfItems = noOfItems;
        this.totalAmount = totalAmt;
        this.statusOfOrder = orderStatus;
    }
}