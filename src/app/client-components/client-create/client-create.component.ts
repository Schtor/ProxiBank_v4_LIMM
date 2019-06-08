import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/model/client';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AccountCreateComponent } from 'src/app/account-components/account-create/account-create.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Account } from 'src/app/model/account';

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
    savingAccount: any = {};
    currentAccount: any = {};


    myFormCustomer = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        login: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.email],
        addressClient: ['', Validators.required],
        zipCodeClient: ['', Validators.required],
        cityClient: ['', Validators.required],
        accountNumberSavings: ['', Validators.required],
        accountBalanceSavings: ['', Validators.required],
        openingAccountDateSavings: ['', Validators.required],
        accountNumberCurrent: ['', Validators.required],
        accountBalanceCurrent: ['', Validators.required],
        openingAccountDateCurrent: ['', Validators.required]
    });

    myFormCompany = this.fb.group({
        companyName: ['', Validators.required],
        siretNumber: ['', Validators.required],
        login: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        addressClient: ['', Validators.required],
        zipCodeClient: ['', Validators.required],
        cityClient: ['', Validators.required],
        accountNumberSavings: ['', Validators.required],
        accountBalanceSavings: ['', Validators.required],
        openingAccountDateSavings: ['', Validators.required],
        accountNumberCurrent: ['', Validators.required],
        accountBalanceCurrent: ['', Validators.required],
        openingAccountDateCurrent: ['', Validators.required]
    });


    constructor(private fb: FormBuilder, private service: ClientService, public router: Router) {
        this.companyAdded = new Client();
        this.customerAdded = new Client();
        this.savingAccount = new Account();
        this.currentAccount = new Account();
    }

    ngOnInit() {
    }

    onSubmitCustomer(): void {
        this.customerAdded.firstName = this.myFormCustomer.value.firstName;
        this.customerAdded.lastName = this.myFormCustomer.value.lastName;
        this.customerAdded.login = this.myFormCustomer.value.login;
        this.customerAdded.phone = this.myFormCustomer.value.phone;
        this.customerAdded.email = this.myFormCustomer.value.email;
        this.customerAdded.addressClient = this.myFormCustomer.value.addressClient;
        this.customerAdded.zipCodeClient = this.myFormCustomer.value.zipCodeClient;
        this.customerAdded.cityClient = this.myFormCustomer.value.cityClient;
        this.customerAdded.accountList = [this.currentAccount, this.savingAccount];
        this.savingAccount.accountNumber = this.myFormCustomer.value.accountNumberSavings;
        this.savingAccount.accountBalance = this.myFormCustomer.value.accountBalanceSavings;
        this.savingAccount.openingAccountDate = this.myFormCustomer.value.openingAccountDateSavings;
        this.savingAccount.typeOfAccount = '2';
        this.currentAccount.accountNumber = this.myFormCustomer.value.accountNumberCurrent;
        this.currentAccount.accountBalance = this.myFormCustomer.value.accountBalanceCurrent;
        this.currentAccount.openingAccountDate = this.myFormCustomer.value.openingAccountDateCurrent;
        this.currentAccount.typeOfAccount = '1';
        this.service.createClient(this.customerAdded).subscribe((data: {}) => {
            this.service.getClients();
            this.router.navigate(['/client-list']);
        });
    }

    onSubmitCompany(): void {
        this.companyAdded.companyName = this.myFormCompany.value.companyName;
        this.companyAdded.siretNumber = this.myFormCompany.value.siretNumber;
        this.companyAdded.login = this.myFormCompany.value.login;
        this.companyAdded.phone = this.myFormCompany.value.phone;
        this.companyAdded.email = this.myFormCompany.value.email;
        this.companyAdded.addressClient = this.myFormCompany.value.addressClient;
        this.companyAdded.zipCodeClient = this.myFormCompany.value.zipCodeClient;
        this.companyAdded.cityClient = this.myFormCompany.value.cityClient;
        this.companyAdded.accountList = [this.currentAccount, this.savingAccount];
        this.savingAccount.accountNumber = this.myFormCompany.value.accountNumberSavings;
        this.savingAccount.accountBalance = this.myFormCompany.value.accountBalanceSavings;
        this.savingAccount.openingAccountDate = this.myFormCompany.value.openingAccountDateSavings;
        this.savingAccount.typeOfAccount = '2';
        this.currentAccount.accountNumber = this.myFormCompany.value.accountNumberCurrent;
        this.currentAccount.accountBalance = this.myFormCompany.value.accountBalanceCurrent;
        this.currentAccount.openingAccountDate = this.myFormCompany.value.openingAccountDateCurrent;
        this.currentAccount.typeOfAccount = '1';
        this.service.createClient(this.companyAdded).subscribe((data: {}) => {
            this.service.getClients();
            this.router.navigate(['/client-list']);
        });
    }

    onSelect() {
        this.clientType = true;
    }

    offSelect() {
        this.clientType = false;
    }

}
