import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Client } from 'src/app/model/client';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-client-edit',
    templateUrl: './client-edit.component.html',
    styleUrls: ['./client-edit.component.css'],
    providers: [ClientService]
})
export class ClientEditComponent implements OnInit {

    clients: any = [];
    idClient = this.activatedRoute.snapshot.params.idClient;
    clientUpdated: {};
    selectedClient: {};

    myForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.clientUpdated = new Client();
        this.selectedClient = new Client();
    }

    ngOnInit() {
        this.service.getClient(this.idClient).subscribe((data: {}) => {
            this.selectedClient = data;
        });

    }

    clearField() {

    }
    getClients() {
        this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));

    }

    deleteClient(idClient) {
        if (window.confirm('Do you really want to delete client number ' + idClient + ' ?')) {
            this.service.deleteClient(idClient).subscribe(data => {
                this.getClients();
                this.router.navigate(['/client-list']);
            });
        }
    }

    onSubmit(value: string): void {
        console.warn(this.myForm.value.firstName);

    }

    updateClient(firstName: HTMLInputElement, lastName: HTMLInputElement, idClient: number) {
        const c = new Client(firstName.value, lastName.value);
        c.idClient = idClient;
        if (window.confirm('Do you want to update this client?')) {
            this.service.updateClient(c).subscribe(data => {
                this.service.getClients();
                this.router.navigate(['/client-list']);
            });
        }


    }
}
