import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/model/client';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AccountCreateComponent } from 'src/app/account-components/account-create/account-create.component';

@Component({
    selector: 'app-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css'],
    providers: [ClientService]
})
export class ClientCreateComponent implements OnInit {

    @Input()
    clientAdded = new Client();

    constructor(private service: ClientService, public router: Router) {
        //   this.clientAdded.account = new Account();
    }

    ngOnInit() {
    }

    addClient(dataClient) {
        this.service.createClient(this.clientAdded).subscribe((data: {}) => {
            this.router.navigate(['/client-list']);
        });
    }

}
