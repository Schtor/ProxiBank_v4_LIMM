import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/model/client';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css'],
    providers: [ClientService]
})
export class ClientListComponent implements OnInit {


    clients: any = [];

    displayedColumns: string[] = ['firstName', 'lastName', 'actions'];
    displayedColumns2: string[] = ['firstName', 'lastName', 'actions'];
    dataSource = new MatTableDataSource<Client>([]);
    dataSource2 = new MatTableDataSource<Client>([]);

    @ViewChild("paginator1") paginator: MatPaginator;
    @ViewChild("paginator2") paginator2: MatPaginator;


    constructor(private service: ClientService) { }

    getClients() {
        this.service.getClients().subscribe(data => {
            this.clients = data
            this.dataSource.data = this.clients.filter(c => {
                return c.firstName && !c.siretNumber;
            })
            this.dataSource2.data = this.clients.filter(c => {
                return !c.firstName && c.siretNumber;
            })
            this.dataSource.paginator = this.paginator;
            this.dataSource2.paginator = this.paginator2;
        }, error => console.log('error in service'));

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
