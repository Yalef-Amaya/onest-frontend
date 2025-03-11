import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient){}

    createUsers( newUser: any ){
        const token = localStorage.getItem( 'token' );
        const headers = new HttpHeaders().set('X-Token', token! )

        return this.http.post( 'http://localhost:3000/api/users', newUser, {headers: headers})
    }

    getUsers(){
      return this.http.get('http://localhost:3000/api/users')
    }
}