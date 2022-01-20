export interface self {
    href: string;
}

export interface products {
    href : string;
}

export interface Links {
    self: self;
    products: products;
}

export interface product {
    id?:number;
    name: string;
    description: string;
    quantity:number;
    price:number;
    _links:Links;
}
