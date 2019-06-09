import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
    selector: 'app-customer-edit',
    templateUrl: './customer-edit.component.html',
    styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

    clients: any = [];
    id = this.activatedRoute.snapshot.params.id;
    customerUpdated: any = {};
    selectedCustomer: {};

    myForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        addressClient: ['', Validators.required],
        zipCodeClient: ['', Validators.required],
        cityClient: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.customerUpdated = new Client();
        this.selectedCustomer = new Client();
    }

    ngOnInit() {
        this.service.getClient(this.id).subscribe((data: {}) => {
            this.selectedCustomer = data;
        });

    }

    getClients() {
        this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));

    }


    onSubmit(id: number, accountList: Account[]): void {
        this.customerUpdated.firstName = this.myForm.value.firstName;
        this.customerUpdated.lastName = this.myForm.value.lastName;
        this.customerUpdated.id = id;
        this.customerUpdated.phone = this.myForm.value.phone;
        this.customerUpdated.email = this.myForm.value.email;
        this.customerUpdated.addressClient = this.myForm.value.addressClient;
        this.customerUpdated.zipCodeClient = this.myForm.value.zipCodeClient;
        this.customerUpdated.cityClient = this.myForm.value.cityClient;
        this.customerUpdated.accountList = accountList;
        if (window.confirm('Confirmez-vous la modification?')) {
            this.service.updateCustomer(this.customerUpdated).subscribe(data => {
                this.service.getClients();
                this.router.navigate(['/client-list']);
            });
        }
    }
}
