import { Injectable } from "@angular/core";
import { StatusOfOrder } from "./order-status.enum";

@Injectable()
export class Order {

    constructor(public customerName: string, 
                public noOfItems: number, 
                public totalAmount: number, 
                public statusOfOrder: StatusOfOrder) {}
}