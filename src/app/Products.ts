import { product } from "./Product_";

export interface Self {
    href: string;
}

export interface Links {
    self: Self;
}

export interface ProductList {
    products : product[];
}

export interface embedded {
    productList : product[];
    _links : Links;
}

export interface Products {
    _embedded : embedded;
}
