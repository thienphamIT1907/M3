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
