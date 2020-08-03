import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractRegisterForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contractRegisterForm = this.fb.group({
      contractId: '',
      employeeId: '',
      customerId: '',
      fServiceId: '',
      startDate: '',
      endDate: '',
      preCost: ''
    });
  }

  onSubmit(): void {
    console.log(this.contractRegisterForm);
  }

}
