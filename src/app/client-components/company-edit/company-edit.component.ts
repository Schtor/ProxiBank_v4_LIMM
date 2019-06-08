import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';

@Component({
    selector: 'app-company-edit',
    templateUrl: './company-edit.component.html',
    styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

    clients: any = [];
    id = this.activatedRoute.snapshot.params.id;
    companyUpdated: any = {};
    selectedCompany: {};

    myForm = this.fb.group({
        companyName: ['', Validators.required],
        siretNumber: ['', Validators.required],
        login: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        addressClient: ['', Validators.required],
        zipCodeClient: ['', Validators.required],
        cityClient: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.companyUpdated = new Client();
        this.selectedCompany = new Client();
    }

    ngOnInit() {
        this.service.getClient(this.id).subscribe((data: {}) => {
            this.selectedCompany = data;
        });

    }

    getClients() {
        this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));

    }


    onSubmit(id: number): void {
        this.companyUpdated.companyName = this.myForm.value.companyName;
        this.companyUpdated.siretNumber = this.myForm.value.siretNumber;
        this.companyUpdated.login = this.myForm.value.login;
        this.companyUpdated.phone = this.myForm.value.phone;
        this.companyUpdated.email = this.myForm.value.email;
        this.companyUpdated.addressClient = this.myForm.value.addressClient;
        this.companyUpdated.zipCodeClient = this.myForm.value.zipCodeClient;
        this.companyUpdated.cityClient = this.myForm.value.cityClient;
        this.companyUpdated.id = id;
        if (window.confirm('Do you want to update this client?')) {
            this.service.updateClient(this.companyUpdated).subscribe(data => {
                this.service.getClients();
                this.router.navigate(['/client-list']);
            });
            console.warn(this.myForm.value.companyName);

        }

    }
}
