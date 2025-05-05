import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response';
import { Observable } from 'rxjs';
import { Vinculacion } from '../interfaces/vinculaciones';

@Injectable({
  providedIn: 'root'
})
export class VinculacionService {
    constructor( private http: HttpClient ) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem( 'token' ) ?? '';

    return new HttpHeaders().set( 'X-Token', token );
  }

  registerVinculacion( newVinculacion: Vinculacion ) : Observable<Response<Vinculacion>> {
    return this.http.post<Response<Vinculacion>>( 'http://3.135.209.89:3000/api/vinculacion', newVinculacion, { headers: this.getHeaders() } );
  }

  getVinculaciones() : Observable<Response<Vinculacion[]>> {
    return this.http.get<Response<Vinculacion[]>>( 'http://3.135.209.89:3000/api/vinculacion', { headers: this.getHeaders() } );
  }

  deleteVinculacionById( id: string ) : Observable<Response<Vinculacion>> {
    return this.http.delete<Response<Vinculacion>>( `http://3.135.209.89:3000/api/vinculacion/${ id }`, { headers: this.getHeaders() } );
  }

  getVinculacionById( id: string ) : Observable<Response<Vinculacion>> {
    return this.http.get<Response<Vinculacion>>( `http://3.135.209.89:3000/api/vinculacion/${ id }`, { headers: this.getHeaders() } );
  }

  updateVinculacionById( id: string, updatedVinculacion: any ) {
    return this.http.patch( `http://3.135.209.89:3000/api/vinculacion/${ id }`, updatedVinculacion, { headers: this.getHeaders() } )
  }
}