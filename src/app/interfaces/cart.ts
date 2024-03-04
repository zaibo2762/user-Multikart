interface Product {
    id: number;
    title: string;
    price: string;
    imageUrl: string;
  }
export interface Cart extends Product {
    quantity:number;
}
