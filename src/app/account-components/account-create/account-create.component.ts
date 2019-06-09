import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/service/account.service';

@Component({
    selector: 'app-account-create',
    templateUrl: './account-create.component.html',
    styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

    clients: any = [];
    id = this.activatedRoute.snapshot.params.id;
    clientUpdated: any = {};
    accountCreated: any = {};
    selectedClient: {};
    accountType: boolean;


    myFormCurrent = this.fb.group({
        accountNumber: ['', Validators.required],
        accountBalance: ['', Validators.required],
        openingAccountDate: ['', Validators.required]
    });

    myFormSavings = this.fb.group({
        accountNumber: ['', Validators.required],
        accountBalance: ['', Validators.required],
        openingAccountDate: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private serviceAcc: AccountService, private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.clientUpdated = new Client();
        this.selectedClient = new Client();
        this.accountCreated = new Account();
    }

    ngOnInit() {
        this.service.getClient(this.id).subscribe((data: {}) => {
            this.selectedClient = data;
        });
    }

    getClients() {
        this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));

    }

    onSubmitSavings(id: number, firstName: string, lastName: string, phone: string, email: string, addressClient: string, zipCodeClient: string,
        cityClient: string, companyName: string, siretNumber: string, accountList: Account[]): void {
        this.accountCreated.accountNumber = this.myFormSavings.value.accountNumber;
        this.accountCreated.accountBalance = this.myFormSavings.value.accountBalance;
        this.accountCreated.openingAccountDate = this.myFormSavings.value.openingAccountDate;
        this.accountCreated.typeOfAccount = 'Saving';
        this.accountCreated.client = this.selectedClient;
        this.clientUpdated.id = id;
        this.clientUpdated.firstName = firstName;
        this.clientUpdated.lastName = lastName;
        this.clientUpdated.companyName = companyName;
        this.clientUpdated.siretNumber = siretNumber;
        this.clientUpdated.phone = phone;
        this.clientUpdated.email = email;
        this.clientUpdated.addressClient = addressClient;
        this.clientUpdated.zipCodeClient = zipCodeClient;
        this.clientUpdated.cityClient = cityClient;
        this.clientUpdated.accountList = accountList;


        if (window.confirm('Confirmez-vous cet ajout?')) {
            if (this.accountCreated.typeOfAccount === 'Current') {
                this.serviceAcc.createCurrent(this.accountCreated).subscribe((data: {}) => {
                    this.serviceAcc.getAccounts();
                    this.router.navigate(['/client-list']);
                });
            } else if (this.accountCreated.typeOfAccount === 'Saving') {
                this.serviceAcc.createSaving(this.accountCreated).subscribe((data: {}) => {
                    this.serviceAcc.getAccounts();
                    this.router.navigate(['/client-list']);
                });

            }

            if (this.clientUpdated.accountList) {
                this.clientUpdated.accountList.push(this.accountCreated);
            } else {
                this.clientUpdated.accountList = [this.accountCreated];
            }

            if (this.clientUpdated.firstName) {
                this.service.updateCustomer(this.clientUpdated).subscribe(data => {
                    this.service.getClients();
                    this.router.navigate(['/client-list']);
                });
            } else if (this.clientUpdated.siretNumber) {
                this.service.updateCompany(this.clientUpdated).subscribe(data => {
                    this.service.getClients();
                    this.router.navigate(['/client-list']);
                });
            }
        }
        console.log(this.clientUpdated);

    }

    onSubmitCurrent(id: number, firstName: string, lastName: string, phone: string, email: string, addressClient: string, zipCodeClient: string,
        cityClient: string, companyName: string, siretNumber: string, accountList: Account[]): void {
        this.accountCreated.accountNumber = this.myFormCurrent.value.accountNumber;
        this.accountCreated.accountBalance = this.myFormCurrent.value.accountBalance;
        this.accountCreated.openingAccountDate = this.myFormCurrent.value.openingAccountDate;
        this.accountCreated.typeOfAccount = 'Current';
        this.accountCreated.client = this.selectedClient;
        this.clientUpdated.id = id;
        this.clientUpdated.firstName = firstName;
        this.clientUpdated.lastName = lastName;
        this.clientUpdated.companyName = companyName;
        this.clientUpdated.siretNumber = siretNumber;
        this.clientUpdated.phone = phone;
        this.clientUpdated.email = email;
        this.clientUpdated.addressClient = addressClient;
        this.clientUpdated.zipCodeClient = zipCodeClient;
        this.clientUpdated.cityClient = cityClient;


        if (window.confirm('Confirmez-vous cet ajout?')) {
            if (this.accountCreated.typeOfAccount === 'Current') {
                this.serviceAcc.createCurrent(this.accountCreated).subscribe((data: {}) => {
                    this.serviceAcc.getAccounts();
                    this.router.navigate(['/client-list']);
                });
            } else if (this.accountCreated.typeOfAccount === 'Saving') {
                this.serviceAcc.createSaving(this.accountCreated).subscribe((data: {}) => {
                    this.serviceAcc.getAccounts();
                    this.router.navigate(['/client-list']);
                });
                if (this.clientUpdated.accountList) {
                    this.clientUpdated.accountList.push(this.accountCreated);
                } else {
                    this.clientUpdated.accountList = [this.accountCreated];
                }
            }
            if (this.clientUpdated.firstName) {
                this.service.updateCustomer(this.clientUpdated).subscribe(data => {
                    this.service.getClients();
                    this.router.navigate(['/client-list']);
                });
            } else if (this.clientUpdated.siretNumber) {
                this.service.updateCompany(this.clientUpdated).subscribe(data => {
                    this.service.getClients();
                    this.router.navigate(['/client-list']);
                });
            }
        }
        console.log(this.clientUpdated);
    }

    onSelect() {
        this.accountType = true;
    }

    offSelect() {
        this.accountType = false;
    }


}
