import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';
import { Cargo } from '../interfaces/cargos';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  private token: string;
  private headers: HttpHeaders;

  constructor( private http: HttpClient) { 
    this.token = localStorage.getItem( 'token' ) ?? '';
    console.log(this.token);
    this.headers = new HttpHeaders().set( 'X-Token', this.token! );
  }

  getCargos() : Observable<Response<Cargo[]>> {
    return this.http.get<Response<Cargo[]>>('http://localhost:3000/api/cargos');
  }

  createCargo( newCargo: Cargo ) : Observable<Response<Cargo>> {
    return this.http.post<Response<Cargo>>( 'http://localhost:3000/api/cargos', newCargo, { headers: this.headers } );
  }

  deleteCargoById( id: string ) : Observable<Response<Cargo>> {
    return this.http.delete<Response<Cargo>>( `http://localhost:3000/api/cargos/${ id }`, { headers: this.headers } );
  }

  getCargoById( id: string ) : Observable<Response<Cargo>> {
    return this.http.get<Response<Cargo>>( `http://localhost:3000/api/cargos/${ id }` );
  }

  updateCargoById( id: string, updatedCargo: any ) {
    return this.http.patch( `http://localhost:3000/api/cargos/${ id }`, updatedCargo, { headers: this.headers } )
  }
}
