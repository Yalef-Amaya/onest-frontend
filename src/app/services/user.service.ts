import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private token: string;
  private headers: HttpHeaders;

  constructor( private http: HttpClient){
    this.token = localStorage.getItem('token') ?? '';
    console.log( this.token );
    this.headers = new HttpHeaders().set('X-Token', this.token! );
  }

  getUsers() : Observable<Response<User[]>> {
    return this.http.get<Response<User[]>>('http://3.135.209.89:3000/api/users');
  }

  createUser( newUser: User ) : Observable<Response<User>> {
    return this.http.post<Response<User>>('http://3.135.209.89:3000/api/users', newUser, { headers: this.headers });
  }

  deleteUserById( id: string ) : Observable<Response<User>> {
    return this.http.delete<Response<User>>(`http://3.135.209.89:3000/api/users/${ id }`, {headers: this.headers });
  }

  getUserById( id: string ) : Observable<Response<User>>{
    return this.http.get<Response<User>>(`http://3.135.209.89:3000/api/users/${ id }`);
  }

  updateUserById( id: string, updateUser: any){
    return this.http.patch( `http://3.135.209.89:3000/api/users/${ id }`, updateUser, { headers: this.headers })
  }
}