import { Component } from "@angular/core";
import { Product } from "src/models/product.model";
import { Model } from "src/models/repository.model";

@Component({
    selector: "app",
    templateUrl: "template.html"
})

export class ProductComponent {
    model: Model = new Model();

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
    
    selectedProduct: Product = new Product();

    selectedProductName: string = "None";

    getSelected(product: Product): boolean {
        return product.name == this.selectedProductName;
    }

    clearSelected() {
        this.selectedProduct = new Product();
    }

    specifyProductName(target: any) {
        if("value" in target) {
            this.selectedProduct.name = target.value; }
        else {
            this.selectedProduct.name = "None";
        }
    }

    getInputContents(target: any): string {
        if("value" in target) {
            return target.value;
        }
        else {
            return "None";
        }
    }
}