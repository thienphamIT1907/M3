import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { ContractListComponent } from './components/contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './components/contract/contract-create/contract-create.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { FServiceListComponent } from './components/f-service/f-service-list/f-service-list.component';
import { FServiceCreateComponent } from './components/f-service/f-service-create/f-service-create.component';
import { ContractDetailListComponent } from './components/contract-detail/contract-detail-list/contract-detail-list.component';
import { ContractDetailCreateComponent } from './components/contract-detail/contract-detail-create/contract-detail-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    ContractListComponent,
    ContractCreateComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    FServiceListComponent,
    FServiceCreateComponent,
    ContractDetailListComponent,
    ContractDetailCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
