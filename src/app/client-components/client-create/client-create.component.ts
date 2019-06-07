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

    customerAdded: any = {};
    companyAdded: any = {};
    clientType: boolean;

    myFormCustomer = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
    });

    myFormCompany = this.fb.group({
        companyName: ['', Validators.required],
        siretNumber: ['', Validators.required]
    });


    constructor(private fb: FormBuilder, private service: ClientService, public router: Router) {
        this.companyAdded = new Client();
        this.customerAdded = new Client();
        // this.clientAdded.account = new Account();
    }

    ngOnInit() {
    }

    onSubmitCustomer(): void {
        this.customerAdded.firstName = this.myFormCustomer.value.firstName;
        this.customerAdded.lastName = this.myFormCustomer.value.lastName;
        this.service.createClient(this.customerAdded).subscribe((data: {}) => {
            this.service.getClients();
            this.router.navigate(['/client-list']);
        });
        console.warn(this.myFormCustomer.value.firstName);
    }

    onSubmitCompany(value: string): void {
        this.companyAdded.companyName = this.myFormCompany.value.companyName;
        this.companyAdded.siretNumber = this.myFormCompany.value.siretNumber;
        this.service.createClient(this.companyAdded).subscribe((data: {}) => {
            this.service.getClients();
            this.router.navigate(['/client-list']);
        });
        console.warn(this.myFormCompany.value.companyName);
    }

    onSelect() {
        this.clientType = true;
    }

    offSelect() {
        this.clientType = false;
    }

    // addCompany(companyName: HTMLInputElement, siretNumber: HTMLInputElement) {
    //     this.clientAdded = new Client(companyName.value, siretNumber.value)
    //     this.service.createClient(this.clientAdded).subscribe((data: {}) => {
    //         this.service.getClients();
    //         this.router.navigate(['/client-list']);
    //     });
    // }
}
