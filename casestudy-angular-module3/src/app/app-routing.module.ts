import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const configRouter: Routes = [
  {
    path: 'customer-list',
    component: CustomerListComponent
  },
  {
    path: 'customer-create',
    component: CustomerCreateComponent
  },
  {
    path: 'customer-edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(configRouter)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
