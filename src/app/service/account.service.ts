import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
    endpoint = environment.url;

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

    getAccountsByCleint(id): Observable<Account> {
        return this.http.get<Account>(this.endpoint + '/accounts/by-client/' + id, this.httpOptions);
    }

     updateAccount(account): Observable<Account> {
        return this.http.put<Account>(this.endpoint + '/accounts/' + account.id, JSON.stringify(account), this.httpOptions);
    }

    virement(virement): Observable<any> {
        return this.http.post<any>(this.endpoint + '/virement', JSON.stringify(virement), this.httpOptions);
    }

    saveAccountSaving(account): Observable<Account> {
        return this.http.post<Account>(this.endpoint + '/accounts/saving/', JSON.stringify(account), this.httpOptions);
    }

    saveAccountCurrent(account): Observable<Account> {
        return this.http.post<Account>(this.endpoint + '/accounts/current/', JSON.stringify(account), this.httpOptions);
    }
}
