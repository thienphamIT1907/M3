import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { validationPositiveNumber } from 'src/app/validation/validation-positive-number';

@Component({
  selector: 'app-contract-detail-create',
  templateUrl: './contract-detail-create.component.html',
  styleUrls: ['./contract-detail-create.component.css']
})
export class ContractDetailCreateComponent implements OnInit {

  contractDetailRegisterForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contractDetailRegisterForm = this.fb.group({
      contractDetailId: '',
      contractId: '',
      fServiceBonusId: '',
      amount: ['', [validationPositiveNumber]]
    });
  }

  onSubmit(): void { }

  validationPostitiveNumber(): boolean {
    return this.contractDetailRegisterForm.get('amount').hasError('forbiddenNumber')
            && this.contractDetailRegisterForm.get('amount').touched;
  }
}
