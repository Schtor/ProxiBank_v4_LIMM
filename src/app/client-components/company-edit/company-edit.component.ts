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
    selectedCompany: any = {};

    myForm = this.fb.group({
        companyName: ['', Validators.required],
        siretNumber: ['', Validators.required],
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
            this.myForm.patchValue({
                companyName: this.selectedCompany.companyName,
                siretNumber: this.selectedCompany.siretNumber,
                phone: this.selectedCompany.phone,
                email: this.selectedCompany.email,
                addressClient: this.selectedCompany.addressClient,
                zipCodeClient: this.selectedCompany.zipCodeClient,
                cityClient: this.selectedCompany.cityClient

            })
        });

    }

    getClients() {
        this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));

    }


    onSubmit(id: number, accountList: Account[]): void {
        this.companyUpdated.companyName = this.myForm.value.companyName;
        this.companyUpdated.siretNumber = this.myForm.value.siretNumber;
        this.companyUpdated.id = id;
        this.companyUpdated.phone = this.myForm.value.phone;
        this.companyUpdated.email = this.myForm.value.email;
        this.companyUpdated.addressClient = this.myForm.value.addressClient;
        this.companyUpdated.zipCodeClient = this.myForm.value.zipCodeClient;
        this.companyUpdated.cityClient = this.myForm.value.cityClient;
        this.companyUpdated.accountList = accountList;
        if (window.confirm('Confirmez-vous cette modification ?')) {
            this.service.updateClient(this.companyUpdated).subscribe(data => {
                // this.service.getClients();
                this.router.navigate(['/client-list']);
            });
        }

    }
}
