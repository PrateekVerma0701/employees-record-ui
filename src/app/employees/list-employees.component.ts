import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 36492,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@infotech.com',
      phoneNumber: 8967452308,
      dateOfBirth: new Date('10/25/1988'),
      department:'IT',
      isActive: true,
      photoPath:'assets/images/mark.png'
    },
    {
      id: 25882,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'mary@infotech.com',
      phoneNumber: 9634267829,
      dateOfBirth: new Date('09/24/1991'),
      department:'Sales',
      isActive: true,
      photoPath:'assets/images/mary.png'
    },
    {
      id: 46890,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'john@infotech.com',
      phoneNumber: 7452345671,
      dateOfBirth: new Date('11/18/1993'),
      department:'Marketing',
      isActive: true,
      photoPath:'assets/images/john.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
