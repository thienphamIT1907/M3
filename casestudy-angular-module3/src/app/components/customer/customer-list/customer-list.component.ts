import { CustomerService } from './../../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from './../../../models/customer/Customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  test: string;

  constructor(private customerSerivce: CustomerService) { }

  ngOnInit(): void {
    this.customers = this.customerSerivce.getAllCustomer();
    this.test = this.customerSerivce.getCustomerTypeById(1).customerTypeName;
  }
}
