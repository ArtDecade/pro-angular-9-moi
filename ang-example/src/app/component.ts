import { ApplicationRef, Component } from "@angular/core";
import { Model } from "src/models/repository.model";
import { Product } from "src/models/product.model";

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

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return "p-2 " + (!this.isPriceGTE(product.id, 50) ? "bg-info" : "bg-warning");
    }

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

    getStyles(key: number) {
        let product = this.model.getProduct(key);
        if(!product) {
            return null;
        } else {
            return {
                fontSize: "30px",
                "margin.px": 100,
                color: this.isPriceGTE(key, 50) ? "red" : "green"
            }
        }

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

    getClassMap(key: number): Object {
        return {
            "text-center bg-danger": this.model.getProduct(key)?.name  == "Kayak",
            "bg-info": !this.isPriceGTE(key, 50)
        }
    }

    fontSizeWithUnits: string = "30px";
    fontSizeWithoutUnits: string = "30";
}
