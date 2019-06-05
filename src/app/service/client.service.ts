import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    endpoint = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.endpoint + '/clients', this.httpOptions);
    }
}
