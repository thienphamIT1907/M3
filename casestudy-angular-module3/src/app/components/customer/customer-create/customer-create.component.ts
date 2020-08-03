import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { validationPhoneNumber } from '../../../validation/validation-phone-number';
import { validationIdCard } from '../../../validation/validation-id-card';
import { validationEmail } from '../../../validation/validation-email';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerRegisterForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerRegisterForm = this.fb.group({
      customerId: '',
      customerCode: ['', [Validators.pattern('^KH-[0-9]{4}$')]],
      customerTypeId: '',
      customerName: '',
      birthday: '',
      idCard: ['', [validationIdCard]],
      phoneNumber: ['', [validationPhoneNumber]],
      email: ['', [validationEmail]],
      address: '',
      gender: ''
    });
  }

  get getCustomerCode(): AbstractControl {
    return this.customerRegisterForm.get('customerCode');
  }

  get getPhoneNumber(): AbstractControl {
    return this.customerRegisterForm.get('phoneNumber');
  }

  get getEmail(): AbstractControl {
    return this.customerRegisterForm.get('email');
  }

  get getIdCard(): AbstractControl {
    return this.customerRegisterForm.get('idCard');
  }

  onSubmit(): void {
    console.log(this.customerRegisterForm.value);
  }

  // validationCustomerCode(): boolean {
  //   return this.customerRegisterForm.get('customerCode').hasError('pattern') &&
  //           this.customerRegisterForm.get('customerCode').touched;
  // }

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
