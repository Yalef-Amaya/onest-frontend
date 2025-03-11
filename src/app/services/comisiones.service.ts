import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ComisionesService {

    constructor( private http: HttpClient){}

    createComisiones( newComision: any ){
        const token = localStorage.getItem( 'token' );
        const headers = new HttpHeaders().set('X-Token', token! )

        return this.http.post( 'http://localhost:3000/api/comisiones', newComision, {headers: headers})
    }
}