import { Component, OnInit } from '@angular/core';
import { customerArr } from '../../../models/customer/Customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerArr = customerArr;

  constructor() { }

  ngOnInit(): void {
  }

}
