import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, users, Links, self } from 'src/app/User';
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

  userList!: User ;

  private apiUrl = 'http://localhost:8080/users/';

  constructor( private http:HttpClient) { }

  getUser (id:number) : Observable <User> {
    return this.http.get<User>(this.apiUrl+id)
  }


  // getUsers () : Observable<User> {
  //   this.getData().subscribe((data) =>(
  //     this.userList = data._embedded.userList
  //   ));
  //   console.log(this.userList);
  //   const res = of(this.userList);
  //   return res;
  // }

}
