import { Component, OnInit } from '@angular/core';
import { EmployeeBasicDetailService } from '../employee-basic-detail.service';

@Component({
  selector: 'app-employee-basic-detail',
  templateUrl: './employee-basic-detail.component.html',
  styleUrls: ['./employee-basic-detail.component.css']
})
export class EmployeeBasicDetailComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeBasicDetailService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }

}
