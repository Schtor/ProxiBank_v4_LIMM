import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    endpoint = environment.url;

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.endpoint + '/clients', this.httpOptions);
    }

    getClient(id): Observable<Client> {
        return this.http.get<Client>(this.endpoint + '/clients/' + id);
    }

    deleteClient(id) {
        return this.http.delete<Client>(this.endpoint + '/clients/' + id, this.httpOptions);
    }

    createClient(client): Observable<Client> {
        return this.http.post<Client>(this.endpoint + '/clients/company', JSON.stringify(client), this.httpOptions);
    }

    createCustomer(client): Observable<Client> {
        return this.http.post<Client>(this.endpoint + '/clients/customer', JSON.stringify(client), this.httpOptions);
    }

    updateClient(client): Observable<Client> {
        return this.http.put<Client>(this.endpoint + '/clients/company', JSON.stringify(client), this.httpOptions);
    }

    updateCustomer(client): Observable<Client> {
        return this.http.put<Client>(this.endpoint + '/clients/customer', JSON.stringify(client), this.httpOptions);
    }
}
