import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { validationPositiveNumber } from '../../../validation/validation-positive-number';

@Component({
  selector: 'app-f-service-create',
  templateUrl: './f-service-create.component.html',
  styleUrls: ['./f-service-create.component.css']
})
export class FServiceCreateComponent implements OnInit {

  fServiceRegisterForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fServiceRegisterForm = this.fb.group({
      fServiceId: '',
      fServiceCode: ['', [Validators.pattern('^DV-[0-9]{4}$')]],
      fServiceName: '',
      area: '',
      poolArea: '',
      floors: ['', [validationPositiveNumber]],
      maxPeople: '',
      cost: ['', [validationPositiveNumber]],
      rentTypeId: '',
      fServiceTypeId: '',
      status: '',
      description: ''
    });
  }

  onSubmit(): void {
    console.log(this.fServiceRegisterForm.value);
  }

  validationCode(): boolean {
    return this.fServiceRegisterForm.get('fServiceCode').hasError('pattern') && this.fServiceRegisterForm.get('fServiceCode').touched;
  }

  validationPostitiveNumber(field: string): boolean {
    return this.fServiceRegisterForm.get(field).hasError('forbiddenNumber') && this.fServiceRegisterForm.get(field).touched;
  }

}
