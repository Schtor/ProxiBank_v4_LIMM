import { Component, OnInit } from '@angular/core';
import { longStackSupport } from 'q';
import { AccountService } from 'src/app/service/account.service';
import { ClientService } from 'src/app/service/client.service';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

    clients: any = [];
    accounts: any = [];

    constructor(private service: AccountService, private servicecl: ClientService) { }

    getClients() {
        this.servicecl.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));

    }

    getAccounts() {
        this.service.getAccounts().subscribe(data => this.accounts = data, error => console.log('error in service'));

    }

    ngOnInit() {
        this.getClients();
    }

}
