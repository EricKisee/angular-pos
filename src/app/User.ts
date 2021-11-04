export interface User {
    id?:number;
    username: string;
    name: string;
    password: string;
}

export interface _embedded {
    userList : User[];
}

export interface _links {
    self : Object;
    users: Object;
}

export interface Data {
    _embedded : _embedded;
    _links : _links;
}



