import { Component, OnInit, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-audit',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.css']
})

@Injectable({
    providedIn: 'root'
})
export class AuditComponent implements OnInit {
    endpoint = environment.url;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor() { }

    ngOnInit() {
    }

}
