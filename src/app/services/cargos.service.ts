import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  constructor( private http: HttpClient) { }

  getCargos(){
    return this.http.get('http://localhost:3000/api/cargos')
  }
}
