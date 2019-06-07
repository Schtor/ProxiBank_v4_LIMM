import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/model/client';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AccountCreateComponent } from 'src/app/account-components/account-create/account-create.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css'],
    providers: [ClientService]
})
export class ClientCreateComponent implements OnInit {

    clientAdded: {};
    clientType: boolean;

    myForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
    });


    constructor(private fb: FormBuilder, private service: ClientService, public router: Router) {
        this.clientAdded = new Client();
        // this.clientAdded.account = new Account();
    }

    ngOnInit() {
    }

    onSubmit(value: string): void {
        console.warn(this.myForm.value.firstName);
    }

    onSelect() {
        this.clientType = true;
    }

    offSelect() {
        this.clientType = false;
    }

    addClient(firstName: HTMLInputElement, lastName: HTMLInputElement) {
        this.clientAdded = new Client(firstName.value, lastName.value)
        this.service.createClient(this.clientAdded).subscribe((data: {}) => {
            this.service.getClients();
            this.router.navigate(['/client-list']);
        });
    }

}
