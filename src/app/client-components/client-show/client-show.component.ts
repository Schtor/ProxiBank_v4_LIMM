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

    id = this.activatedRoute.snapshot.params.id;


    constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) { }

    showClient() {
        this.service.getClient(this.id).subscribe(data => this.client = data, error => console.log('error in system'));

    }

    ngOnInit() {
        this.showClient();
    }

}
