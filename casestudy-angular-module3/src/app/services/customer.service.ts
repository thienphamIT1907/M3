import { customerArr } from './../models/customer/Customer.model';
import { Injectable } from '@angular/core';
import { Customer } from './../models/customer/Customer.model';
import { customerTypeArr } from './../models/customer/CustomerType.model';
import { CustomerType } from './../models/customer/CustomerType.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers = customerArr;
  customerTypes = customerTypeArr;

  constructor(private router: Router) { }

  getAllCustomer(): Customer[] {
    return this.customers;
  }

  getCustomerById(id: number): Customer {
    return this.customers.find(cus => cus.customerId === id);
  }

  createCustomer(customer: Customer): void {
    this.customers.push(customer);
    this.router.navigate(['customer-list']);
  }

  getAllCustomerType(): CustomerType[] {
    return this.customerTypes;
  }

  getCustomerTypeById(id: number): CustomerType {
    return this.customerTypes.find(type => type.customerTypeId === id);
  }
}
