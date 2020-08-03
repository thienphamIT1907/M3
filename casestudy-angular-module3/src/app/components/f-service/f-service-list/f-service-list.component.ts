import { Component, OnInit } from '@angular/core';
import { fServicesArr } from '../../../models/f-service/FService.model';

@Component({
  selector: 'app-f-service-list',
  templateUrl: './f-service-list.component.html',
  styleUrls: ['./f-service-list.component.css']
})
export class FServiceListComponent implements OnInit {

  fServicesArr = fServicesArr;

  constructor() { }

  ngOnInit(): void {
  }

}
