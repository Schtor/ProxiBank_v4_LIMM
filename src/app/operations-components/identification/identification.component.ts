import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-identification',
    templateUrl: './identification.component.html',
    styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

    alert: boolean;
    myForm = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, public router: Router) { }

    ngOnInit() {
    }

    onSubmit(): void {
        if (this.myForm.value.login === 'conseiller' && this.myForm.value.password === 'conseiller') {
            this.router.navigate(['/client-list']);
        } else if (this.myForm.value.login === 'gerant' && this.myForm.value.password === 'gerant') {
            this.router.navigate(['/advisor-list']);
        } else {
            this.alert = true;
        }
    }

}
