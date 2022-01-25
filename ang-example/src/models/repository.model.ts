import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class Model {
    private dataSource: SimpleDataSource = new SimpleDataSource();
    private products: Product[];
    private locator = (p: Product, id: number) => p.id == id;

    constructor() {
        this.products =  new Array<Product>();
        this.dataSource.getData().forEach(p => this.products.push(p));
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product | undefined {
        if(id) {
           return this.products.find(p => this.locator(p, id));
        } else {
            return undefined;
        }
    }

    getProductName(id: number): string {
        if(!this.getProduct(id)) {
            return "No product for this ID number."
        } else {
            if(!this.getProduct(id)?.name){
                return "The product has no name.";
            } else {
                return this.getProduct(id)?.name as string;
            }
        }
    }

    getProductPrice(id: number) : number {
        if(!this.getProduct(id)) {
            return 0;
        } else {
            if(!this.getProduct(id)?.price){
                return 0;
            } else {
                return this.getProduct(id)?.price as number;
            }
        }
    }

    saveProduct(product: Product) {
        if(typeof product.id == "undefined") {
            product.id = 0;
        }
        if(product.id = 0) {
            product.id = this.generateID();
            this.products.push(product);
        }
        else {
            let productIDAsNumber : number = product.id;
            let index = this.products.findIndex(p => this.locator(p, productIDAsNumber));
            this.products.splice(index, 1, product);
        }
    }

    deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while(this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }

}