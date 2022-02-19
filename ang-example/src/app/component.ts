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

    getSelected(product: Product): boolean {
        return product.name == this.selectedProduct.name;
    }

    clearSelected() {
        this.selectedProduct = new Product();
    }


}
