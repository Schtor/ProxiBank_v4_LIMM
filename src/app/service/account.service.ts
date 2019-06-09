import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    endpoint = 'http://localhost:8080/limm';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }

    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(this.endpoint + '/accounts' , this.httpOptions);
    }

    getAccount(id): Observable<Account> {
        return this.http.get<Account>(this.endpoint + '/accounts/' + id, this.httpOptions);
    }

    updateAccount(account): Observable<Account> {
        return this.http.put<Account>(this.endpoint + '/accounts/' + account.id, JSON.stringify(account), this.httpOptions);
    }

    createCurrent(account): Observable<Account> {
        return this.http.post<Account>(this.endpoint + '/accounts/current', JSON.stringify(account), this.httpOptions);
    }

    createSaving(account): Observable<Account> {
        return this.http.post<Account>(this.endpoint + '/accounts/saving', JSON.stringify(account), this.httpOptions);
    }

    deleteAccount(id) {
        return this.http.delete<Account>(this.endpoint + '/accounts/' + id, this.httpOptions);
    }
}
