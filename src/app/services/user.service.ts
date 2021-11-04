import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, _embedded, _links, Data } from 'src/app/User';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  data!: Data;
  userList: User[] = [];

  private apiUrl = 'http://localhost:8080/users';

  constructor( private http:HttpClient) { }

  getUsers () : Observable<User[]> {
    this.getData().subscribe((data) =>(
      this.userList = data._embedded.userList
    ));
    console.log(this.userList);
    const res = of(this.userList);
    return res;
  }

  getData () : Observable <Data> {
    return this.http.get<Data>(this.apiUrl)
  }

}
