import { ApplicationRef, Component } from "@angular/core";
import { Product } from "src/models/product.model";
import { Model } from "src/models/repository.model";

@Component({
    selector: "app",
    templateUrl: "template.html"
})

export class ProductComponent {
    model: Model = new Model();

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    getKey(index: number, product: Product) {
        return product.id;
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getProduct(key: number): Product {
        let p = this.model.getProduct(key);
        if(!p) {
            return new Product();
        } else {
            return p;
        }
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }
    
    getProductCount(): number {
        return this.model.getProducts().length;
    }

    targetName: string = "Kayak";

}
