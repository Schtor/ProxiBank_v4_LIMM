import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  endpoint = environment.url;

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    getOperationByAccountId(id): Observable<Client> {
        return this.http.get<Client>(this.endpoint + '/operation/' + id, this.httpOptions);
    }
}
