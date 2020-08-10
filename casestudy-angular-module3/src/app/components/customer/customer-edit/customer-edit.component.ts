import { CustomerService } from './../../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { validationPhoneNumber } from '../../../validation/validation-phone-number';
import { validationIdCard } from '../../../validation/validation-id-card';
import { validationEmail } from '../../../validation/validation-email';
import { Customer } from './../../../models/customer/Customer.model';
import { CustomerType } from './../../../models/customer/CustomerType.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerEditForm: FormGroup;
  customer: Customer;
  customerTypes: CustomerType[];

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.customerTypes = this.customerService.getAllCustomerType();

    this.activatedRoute.params.subscribe(data => {
      const id = (+data.id);
      this.customer = this.customerService.getCustomerById(id);
      console.log(this.customer);
    });

    this.customerEditForm = this.fb.group({
      customerId: this.customer.customerId,
      customerCode: [this.customer.customerCode, [Validators.pattern('^KH-[0-9]{4}$')]],
      customerTypeId: this.customer.customerTypeId,
      customerName: this.customer.customerName,
      birthday: this.customer.birthday,
      idCard: [this.customer.idCard, [validationIdCard]],
      phoneNumber: [this.customer.phoneNumber, [validationPhoneNumber]],
      email: [this.customer.email, [validationEmail]],
      address: this.customer.address,
      gender: this.customer.gender
    });
  }

  get getCustomerCode(): AbstractControl {
    return this.customerEditForm.get('customerCode');
  }

  get getPhoneNumber(): AbstractControl {
    return this.customerEditForm.get('phoneNumber');
  }

  get getEmail(): AbstractControl {
    return this.customerEditForm.get('email');
  }

  get getIdCard(): AbstractControl {
    return this.customerEditForm.get('idCard');
  }

  onSubmit(): void {
    console.log(this.customerEditForm.value);
  }

  validationCustomerCode(): boolean {
    return this.getCustomerCode.hasError('pattern') && this.getCustomerCode.touched;
  }

  validationPhoneNumber(): boolean {
    return this.getPhoneNumber.hasError('wrongPhoneNumberPattern') && this.getPhoneNumber.touched;
  }

  validationIdCard(): boolean {
    return this.getIdCard.hasError('wrongIdCardPattern') && this.getIdCard.touched;
  }

  validationEmail(): boolean {
    return this.getEmail.hasError('wrongEmailPattern') && this.getEmail.touched;
  }

}
