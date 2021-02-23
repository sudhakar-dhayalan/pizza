import { Injectable } from "@angular/core";
import { STATUSOFORDER } from "./order-status.constant";

@Injectable()
export class Order {
    customerName: string;
    noOfItems: number;
    totalAmount: number;
    statusOfOrder: STATUSOFORDER

    constructor(custName: string, noOfItems: number, totalAmt: number, orderStatus: STATUSOFORDER) {
        this.customerName = custName;
        this.noOfItems = noOfItems;
        this.totalAmount = totalAmt;
        this.statusOfOrder = orderStatus;
    }
}