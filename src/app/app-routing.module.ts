import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificationComponent } from './operations-components/identification/identification.component';
import { ClientCreateComponent } from './client-components/client-create/client-create.component';
import { ClientListComponent } from './client-components/client-list/client-list.component';
import { ClientShowComponent } from './client-components/client-show/client-show.component';
import { AdvisorCreateComponent } from './advisor-components/advisor-create/advisor-create.component';
import { AdvisorEditComponent } from './advisor-components/advisor-edit/advisor-edit.component';
import { AdvisorListComponent } from './advisor-components/advisor-list/advisor-list.component';
import { AdvisorShowComponent } from './advisor-components/advisor-show/advisor-show.component';
import { AccountCreateComponent } from './account-components/account-create/account-create.component';
import { AccountListComponent } from './account-components/account-list/account-list.component';
import { AccountShowComponent } from './account-components/account-show/account-show.component';
import { TransferComponent } from './operations-components/transfer/transfer.component';
import { AuditComponent } from './operations-components/audit/audit.component';
import { InvestmentComponent } from './operations-components/investment/investment.component';
import { CompanyEditComponent } from './client-components/company-edit/company-edit.component';
import { CustomerEditComponent } from './client-components/customer-edit/customer-edit.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'identification' },
    { path: 'identification', component: IdentificationComponent },
    { path: 'client-create', component: ClientCreateComponent },
    { path: 'client-list', component: ClientListComponent },
    { path: 'client-show/:id', component: ClientShowComponent },
    { path: 'advisor-create', component: AdvisorCreateComponent },
    { path: 'advisor-edit/:id', component: AdvisorEditComponent },
    { path: 'advisor-list', component: AdvisorListComponent },
    { path: 'advisor-show/:id', component: AdvisorShowComponent },
    { path: 'account-create', component: AccountCreateComponent },
    { path: 'account-list', component: AccountListComponent },
    { path: 'account-show/:id', component: AccountShowComponent },
    { path: 'transfer', component: TransferComponent },
    { path: 'audit', component: AuditComponent },
    { path: 'investment', component: InvestmentComponent },
    { path: 'company-edit/:id', component: CompanyEditComponent},
    { path: 'customer-edit/:id', component: CustomerEditComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
