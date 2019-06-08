import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/model/account';

@Component({
    selector: 'app-transfer',
    templateUrl: './transfer.component.html',
    styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

    accountDeb: any = {};
    accountCred: any = {};
    accounts: Account[] = [];

    myForm = this.fb.group({
        id1: ['', Validators.required],
        id2: ['', Validators.required],
        amount: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private router: Router, private service: ClientService, private serviceAcc: AccountService) {
        this.accountCred = new Account();
        this.accountDeb = new Account();
    }

    ngOnInit() {

    }


    onSubmit(): void {
        this.serviceAcc.getAccount(this.myForm.value.id1).subscribe(data => this.accountDeb = data, error => console.log('error in service'));
        this.serviceAcc.getAccount(this.myForm.value.id2).subscribe(data => this.accountCred = data, error => console.log('error in service'));
        console.log(this.accountDeb);


        this.accountDeb.accountBalance = parseInt(this.accountDeb.accountBalance) - parseInt(this.myForm.value.amount);

        this.accountCred.accountBalance = parseInt(this.accountCred.accountBalance) + parseInt(this.myForm.value.amount);
        this.accountDeb.id = this.myForm.value.id1;
        this.accountCred.id = this.myForm.value.id2;
        if (window.confirm('Confirmez-vous ce virement ?')) {
            this.serviceAcc.updateAccount(this.accountDeb).subscribe(data => {
                this.serviceAcc.getAccounts();
            });
            this.serviceAcc.updateAccount(this.accountCred).subscribe(data => {
                this.serviceAcc.getAccounts();
                this.router.navigate(['/client-list']);
            });

        }
    }

}
