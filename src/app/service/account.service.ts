import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
    endpoint = 'http://localhost:3000';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

  constructor(private http: HttpClient) { }

    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(this.endpoint + '/accounts', this.httpOptions);
    }

    getAccount(id): Observable<Account> {
        return this.http.get<Account>(this.endpoint + '/accounts/' + id, this.httpOptions);
    }

     updateAccount(account): Observable<Account> {
        return this.http.put<Account>(this.endpoint + '/accounts/' + account.id, JSON.stringify(account), this.httpOptions);
    }
}
