import { Component } from "@angular/core";
import { Model } from "src/models/repository.model";
import { Product } from "src/models/product.model";

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

    
    isPriceGTE (productID: number | undefined, price: number | undefined): boolean {
        let prod: Product | undefined;
        if(!productID || !price) {
            return false;
        } else {
            prod = this.model.getProduct(productID);
        }

        let prodPrice: number | undefined;
        if(!prod){
            return false;
        } else{
            prodPrice = prod.price;
        }

        if(!prodPrice) {
            return false;
        } else {
            let gte : boolean = true;
            if(prodPrice < price) {
                gte = false;
            }
            return gte;
        }
    }
}
