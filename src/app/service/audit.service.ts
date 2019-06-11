import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Client } from '../model/client';


@Injectable({
    providedIn: 'root'
})
export class AuditService {
    endpoint = environment.url;
    //vu qu'ils sont des dto
    constructor(private http: HttpClient) { }



    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

   audit(): Observable<Account> {
        return this.http.get<Account>(this.endpoint + '/audi', this.httpOptions);
    }
}
