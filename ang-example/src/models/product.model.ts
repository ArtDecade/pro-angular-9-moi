import { ProductType } from "./product.type.model";

export class Product implements ProductType {
    public id?: number;
    public name?: string;
    public category?: string;
    public price?: number;

    constructor(id?: number, name?: string, category?: string, price?: number) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
}