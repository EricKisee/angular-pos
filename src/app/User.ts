export interface self {
    href: string;
}

export interface users {
    href : string;
}

export interface Links {
    self: self;
    users: users;
}

export interface User {
    id?:number;
    username: string;
    name: string;
    password: string;
    _links: Links;
}









