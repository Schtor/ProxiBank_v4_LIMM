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
        lastName: ['', Validators.required]
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


    onSubmit(id: number): void {
        this.customerUpdated.firstName = this.myForm.value.firstName;
        this.customerUpdated.lastName = this.myForm.value.lastName;
        this.customerUpdated.id = id;
        if (window.confirm('Do you want to update this client?')) {
            this.service.updateClient(this.customerUpdated).subscribe(data => {
                this.service.getClients();
                this.router.navigate(['/client-list']);
            });
        }

    }
}
