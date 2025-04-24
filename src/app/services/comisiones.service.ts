import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comisiones } from "../interfaces/comisiones";
import { Response } from "../interfaces/response";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ComisionesService {
    constructor( private http:HttpClient) { }

    getHeaders(){
        const token = localStorage.getItem('token') ?? '';
        return new HttpHeaders().set('X-Token', token! );
      }

    createComisiones( newComision: Comisiones): Observable<Response<Comisiones>>{
        return this.http.post<Response<Comisiones>>('http://localhost:3000/api/comisiones', newComision, { headers: this.getHeaders()});
    }

    getComisiones(): Observable<Response<Comisiones[]>>{
        return this.http.get<Response<Comisiones[]>>('http://localhost:3000/api/comisiones', { headers: this.getHeaders()});
    }

    getComisionesById( comisionesId: string ): Observable<Response<Comisiones>>{
        return this.http.get<Response<Comisiones>>(`http://localhost:3000/api/comisiones/${comisionesId}`, { headers: this.getHeaders()});
    }

    deleteComisionesById( comisionesId: string ): Observable<Response<Comisiones>>{
        return this.http.delete<Response<Comisiones>>(`http://localhost:3000/api/comisiones/${comisionesId}`, { headers: this.getHeaders()});
    }
}