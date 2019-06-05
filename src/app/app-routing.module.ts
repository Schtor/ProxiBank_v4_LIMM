import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificationComponent } from './operations-components/identification/identification.component';
import { ClientCreateComponent } from './client-components/client-create/client-create.component';
import { ClientEditComponent } from './client-components/client-edit/client-edit.component';
import { ClientListComponent } from './client-components/client-list/client-list.component';
import { ClientShowComponent } from './client-components/client-show/client-show.component';
import { AdvisorCreateComponent } from './advisor-components/advisor-create/advisor-create.component';
import { AdvisorEditComponent } from './advisor-components/advisor-edit/advisor-edit.component';
import { AdvisorListComponent } from './advisor-components/advisor-list/advisor-list.component';
import { AdvisorShowComponent } from './advisor-components/advisor-show/advisor-show.component';
import { AccountEditComponent } from './account-components/account-edit/account-edit.component';
import { AccountCreateComponent } from './account-components/account-create/account-create.component';
import { AccountListComponent } from './account-components/account-list/account-list.component';
import { AccountShowComponent } from './account-components/account-show/account-show.component';
import { TransferComponent } from './operations-components/transfer/transfer.component';
import { AuditComponent } from './operations-components/audit/audit.component';
import { InvestmentComponent } from './operations-components/investment/investment.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'identification' },
    { path: 'identification', component: IdentificationComponent },
    { path: 'client-create', component: ClientCreateComponent },
    { path: 'client-edit', component: ClientEditComponent },
    { path: 'client-list', component: ClientListComponent },
    { path: 'client-show', component: ClientShowComponent },
    { path: 'advisor-create', component: AdvisorCreateComponent },
    { path: 'advisor-edit', component: AdvisorEditComponent },
    { path: 'advisor-list', component: AdvisorListComponent },
    { path: 'advisor-show', component: AdvisorShowComponent },
    { path: 'account-create', component: AccountCreateComponent },
    { path: 'account-edit', component: AccountEditComponent },
    { path: 'account-list', component: AccountListComponent },
    { path: 'account-show', component: AccountShowComponent },
    { path: 'transfer', component: TransferComponent },
    { path: 'audit', component: AuditComponent },
    { path: 'investment', component: InvestmentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
