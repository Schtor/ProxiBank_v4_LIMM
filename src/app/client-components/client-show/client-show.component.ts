import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-client-show',
    templateUrl: './client-show.component.html',
    styleUrls: ['./client-show.component.css'],
    providers: [ClientService]
})
export class ClientShowComponent implements OnInit {

    client: any = {};
    clients: any = [];

    idClient = this.activatedRoute.snapshot.params.idClient;


    constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) { }

    showClient() {
        this.service.getClient(this.idClient).subscribe(data => this.client = data, error => console.log('error in system'));

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

    ngOnInit() {
        this.showClient();
    }

}
