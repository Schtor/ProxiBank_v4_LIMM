import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountListComponent } from 'src/app/account-components/account-list/account-list.component';
import { AccountService } from 'src/app/service/account.service';

@Component({
    selector: 'app-client-show',
    templateUrl: './client-show.component.html',
    styleUrls: ['./client-show.component.css'],
    providers: [ClientService]
})
export class ClientShowComponent implements OnInit {

    client: any = {};
    clients: any = [];

    id = this.activatedRoute.snapshot.params.id;
    accounts: Account[] = [];


    constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router, private accountService: AccountService) { }

    showClient() {
        this.client = this.service.getClient(this.id).subscribe(data => this.client = data, error => console.log('error in system'));
        this.accountService.getAccountsByCleint(this.id).subscribe((data:any)=>{
            this.accounts = data;
        })
    }

    getClients() {
        this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));

    }

    deleteClient(id) {
        if (window.confirm('voulez vous confirmer la supression ? ' + id + ' ?')) {
            this.service.deleteClient(id).subscribe(data => {
                this.getClients();
                this.router.navigate(['/client-list']);
            });
        }
    }

    ngOnInit() {
        this.showClient();
    }

}
