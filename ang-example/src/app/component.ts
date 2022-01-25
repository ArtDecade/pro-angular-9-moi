import { Component } from "@angular/core";
import { Model } from "src/models/repository.model";

@Component({
    selector: "app",
    templateUrl: "template.html"
})

export class ProductComponent {
    model: Model = new Model();

    getClasses(key: number): string {
        let pr:number;
        let product = this.model.getProduct(key);
        
        if(product?.price) {
            pr = product.price;
        } else {
            pr = 0;
        }
        return "p-2 " + (pr< 50 ? "bg-info" : "bg-warning");
    }
}
