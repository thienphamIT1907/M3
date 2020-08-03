import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validationPhoneNumber } from '../../../validation/validation-phone-number';
import { validationIdCard } from '../../../validation/validation-id-card';
import { validationEmail } from '../../../validation/validation-email';
import { validationPositiveNumber } from 'src/app/validation/validation-positive-number';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeCreateForm: FormGroup;

  isShow = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeCreateForm = this.fb.group({
      employeeId: '',
      employeeCode: ['', [Validators.pattern('^NV-[0-9]{4}$')]],
      employeeName: ['', [Validators.required]],
      employeeRoleId: '',
      employeeLevelId: '',
      employeeDepartmentId: '',
      birthday: '',
      idCard: ['', [validationIdCard]],
      salary: ['', [validationPositiveNumber]],
      phoneNumber: ['', [validationPhoneNumber]],
      email: ['', [validationEmail]],
      address: '',
      gender: ''
    });
  }

  onSubmit(): void {
    console.log(this.employeeCreateForm);
  }

  validationNameAndCheckTouched(): boolean {
    return this.employeeCreateForm.get('employeeName').hasError('required') && this.employeeCreateForm.get('employeeName').touched;
  }

  validationCodeAndCheckTouched(): boolean {
    return this.employeeCreateForm.get('employeeCode').hasError('pattern') && this.employeeCreateForm.get('employeeCode').touched;
  }

  validationPhoneNumber(): boolean {
    return this.employeeCreateForm.get('phoneNumber').hasError('wrongPhoneNumberPattern') &&
            this.employeeCreateForm.get('phoneNumber').touched;
  }

  validationIdCard(): boolean {
    return this.employeeCreateForm.get('idCard').hasError('wrongIdCardPattern') &&
            this.employeeCreateForm.get('idCard').touched;
  }

  validationEmail(): boolean {
    return this.employeeCreateForm.get('email').hasError('wrongEmailPattern') &&
            this.employeeCreateForm.get('email').touched;
  }

  validationPostitiveNumber(): boolean {
    return this.employeeCreateForm.get('salary').hasError('forbiddenNumber') && this.employeeCreateForm.get('salary').touched;
  }
}
