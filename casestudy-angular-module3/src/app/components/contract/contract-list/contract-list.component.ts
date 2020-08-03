import { Component, OnInit } from '@angular/core';
import { contractArr } from '../../../models/contract/Contract.model';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contractArr = contractArr;

  constructor() { }

  ngOnInit(): void {
  }

}
