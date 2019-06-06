import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Client } from 'src/app/model/client';

@Component({
    selector: 'app-client-edit',
    templateUrl: './client-edit.component.html',
    styleUrls: ['./client-edit.component.css'],
    providers: [ClientService]
})
export class ClientEditComponent implements OnInit {

    id = this.activatedRoute.snapshot.params.id;
    clientUpdated: {};

    constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.clientUpdated = new Client();
        // this.clientUpdated.account = new Account();
    }

    ngOnInit() {
        this.service.getClient(this.id).subscribe((data: {}) => {
            this.clientUpdated = data;
        });
    }

    updateClient() {
        if (window.confirm('Do you want to update this client?')) {
            this.service.updateClient(this.id, this.clientUpdated).subscribe(data => {
                this.router.navigate(['/client-list']);
            });
        }

    }
}
