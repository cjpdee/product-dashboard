export interface ProductData {
    id: string;
    product_name: string;
    category: string;
    size_uk: number;
    colour: string;
    customer_initials: string;
    status: 0 | 1 | 2 | 3;
}

export interface ProductList {
    items: ProductData[];
}
