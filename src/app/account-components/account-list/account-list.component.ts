import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

    clients: any = [];

  constructor(private service: ClientService) { }

  getClients() {
        this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));

    }


    ngOnInit() {
        this.getClients();
    }

}
