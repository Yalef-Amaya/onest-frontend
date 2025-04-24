import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';
import { Offices } from '../interfaces/offices';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {
  private token: string;
  private headers: HttpHeaders;

  constructor( private http: HttpClient ) {
    this.token = localStorage.getItem( 'token' ) ?? '';
    console.log( this.token );
    this.headers = new HttpHeaders().set( 'X-Token', this.token! );
  }

  getOffices() : Observable<Response<Offices[]>> {
    return this.http.get<Response<Offices[]>>( 'http://localhost:3000/api/offices' );
  }

  createOffices( newOffice: Offices ) : Observable<Response<Offices>> {
    return this.http.post<Response<Offices>>( 'http://localhost:3000/api/offices', newOffice, { headers: this.headers } );
  }

  deleteOfficesById( id: string ) : Observable<Response<Offices>> {
    return this.http.delete<Response<Offices>>( `http://localhost:3000/api/offices/${ id }`, { headers: this.headers } );
  }

  getOfficesById( id: string ) : Observable<Response<Offices>> {
    return this.http.get<Response<Offices>>( `http://localhost:3000/api/offices/${ id }` );
  }

  updateOfficesById( id: string, updatedOffices: any ) {
    return this.http.patch( `http://localhost:3000/api/offices/${ id }`, updatedOffices, { headers: this.headers } )
  }
}
