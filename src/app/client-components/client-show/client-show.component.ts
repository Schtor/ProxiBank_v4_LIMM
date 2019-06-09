import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountListComponent } from 'src/app/account-components/account-list/account-list.component';
import { AccountService } from 'src/app/service/account.service';
import { Client } from 'src/app/model/client';

@Component({
    selector: 'app-client-show',
    templateUrl: './client-show.component.html',
    styleUrls: ['./client-show.component.css'],
    providers: [ClientService]
})
export class ClientShowComponent implements OnInit {

    client: any = {};
    clients: any = [];
    // account: any = {};
    accounts: any = [];

    id = this.activatedRoute.snapshot.params.id;


    constructor(private serviceAcc: AccountService, private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.showClient();
    }

    showClient() {
        this.client = this.service.getClient(this.id).subscribe(data => this.client = data, error => console.log('error in system'));

    }

    getClients() {
        this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));

    }

    getAccounts() {
        this.serviceAcc.getAccounts().subscribe(data => this.accounts = data, error => console.log('error in service'));

    }

    deleteClient(id) {
        if (window.confirm('Do you really want to delete client number ' + id + ' ?')) {
            this.service.deleteClient(id).subscribe(data => {
                this.getClients();
                this.router.navigate(['/client-list']);
            });
        }
    }

    // deleteAccount(id) {
    //     if (window.confirm('Le solde de ce compte est-il de 0?')) {
    //         if (window.confirm('Voulez vous vraiment supprimer ce compte ?'))
    //             this.serviceAcc.deleteAccount(id).subscribe(data => {
    //                 this.getAccounts();
    //             });
            
    //     }


    // }
}
