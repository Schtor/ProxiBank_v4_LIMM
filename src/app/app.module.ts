import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-components/client-list/client-list.component';
import { ClientShowComponent } from './client-components/client-show/client-show.component';
import { ClientCreateComponent } from './client-components/client-create/client-create.component';
import { AccountListComponent } from './account-components/account-list/account-list.component';
import { AccountShowComponent } from './account-components/account-show/account-show.component';
import { AccountCreateComponent } from './account-components/account-create/account-create.component';
import { AdvisorListComponent } from './advisor-components/advisor-list/advisor-list.component';
import { AdvisorShowComponent } from './advisor-components/advisor-show/advisor-show.component';
import { AdvisorEditComponent } from './advisor-components/advisor-edit/advisor-edit.component';
import { AdvisorCreateComponent } from './advisor-components/advisor-create/advisor-create.component';
import { TransferComponent } from './operations-components/transfer/transfer.component';
import { AuditComponent } from './operations-components/audit/audit.component';
import { InvestmentComponent } from './operations-components/investment/investment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdentificationComponent } from './operations-components/identification/identification.component';
import { CompanyEditComponent } from './client-components/company-edit/company-edit.component';
import { CustomerEditComponent } from './client-components/customer-edit/customer-edit.component';
import { BankDetailsComponent } from './operations-components/bank-details/bank-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        ClientListComponent,
        ClientShowComponent,
        ClientCreateComponent,
        AccountListComponent,
        AccountShowComponent,
        AccountCreateComponent,
        AdvisorListComponent,
        AdvisorShowComponent,
        AdvisorEditComponent,
        AdvisorCreateComponent,
        TransferComponent,
        AuditComponent,
        InvestmentComponent,
        IdentificationComponent,
        CompanyEditComponent,
        CustomerEditComponent,
        BankDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
