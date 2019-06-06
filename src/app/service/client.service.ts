import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    endpoint = 'http://localhost:8080/myapp';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.endpoint + '/clients', this.httpOptions);
    }

    getClient(idClient): Observable<Client> {
        return this.http.get<Client>(this.endpoint + '/clients/' + idClient);
    }

    deleteClient(idClient) {
        return this.http.delete<Client>(this.endpoint + '/clients/' + idClient, this.httpOptions);
    }

    createClient(Client): Observable<Client> {
        return this.http.post<Client>(this.endpoint + '/clients', JSON.stringify(Client), this.httpOptions);
    }

    updateClient(idClient, client): Observable<Client> {
        return this.http.put<Client>(this.endpoint + '/clients/', JSON.stringify(client), this.httpOptions);
    }
}
