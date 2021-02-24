export class DeliveryAddress {
    constructor(
        public doorNo: string,
        public street: string,
        public area: string,
        public district: string,
        public state: string,
        public pincode: number,
        public country: string
    ) {}
}