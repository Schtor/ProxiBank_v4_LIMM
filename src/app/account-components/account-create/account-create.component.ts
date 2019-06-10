import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/service/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/model/account';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {
    //play with the same client 
  id = this.activatedRoute.snapshot.params.id;
  //instancier un copte par new pour u'il puisse le récupérer
  account: Account = new Account();

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

  constructor(private fb: FormBuilder, private service: AccountService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  //change dans la méthode onSubmit

  onSubmitSavings(): void {
    this.account.accountNumber = this.myFormSavings.value.accountNumber;
    this.account.accountBalance = this.myFormSavings.value.accountBalance;
    this.account.openingAccountDate = this.myFormSavings.value.openingAccountDate;
    this.account.typeOfAccount = "Saving";
    let client = new Client();
    client.id = this.id;
    this.account.client = client;
    this.service.saveAccountSaving(this.account).subscribe((data: {}) => {
        this.router.navigate(['/client-list']);
      });
    
  }

  onSubmitCurrent(): void {
    this.account.accountNumber = this.myFormCurrent.value.accountNumber;
    this.account.accountBalance = this.myFormCurrent.value.accountBalance;
    this.account.openingAccountDate = this.myFormCurrent.value.openingAccountDate;
    this.account.typeOfAccount = "Current";
    let client = new Client();
    client.id = this.id;
    this.account.client = client;

    this.service.saveAccountCurrent(this.account).subscribe((data: {}) => {
        this.router.navigate(['/client-list']);
      });
  }

  onSelect() {
        this.accountType = true;
    }

    offSelect() {
        this.accountType = false;
    }

}
