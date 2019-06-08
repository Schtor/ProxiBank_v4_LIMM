import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css'],
    providers: [ClientService]
})
export class ClientListComponent implements OnInit {


    clients: any = [];

    constructor(private service: ClientService) { }

    getClients() {
        this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));

    }

    deleteClient(id) {
        if (window.confirm('Voulez vous vraiment supprimer ce client ? ')) {
            this.service.deleteClient(id).subscribe(data => this.getClients());
        }
    }

    ngOnInit() {
        this.getClients();
    }

}
