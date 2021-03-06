import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  previewPhoto = false;
  dateOfBirth: Date = new Date(2018, 0, 30);
  contactPreference = "email";
  isActive = true;
  datePickerConfig: Partial<BsDatepickerConfig>;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Sales' },
    { id: 5, name: 'Payroll' },
    { id: 6, name: 'Marketing' }
  ];

  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(1970, 0, 1),
        maxDate: new Date(2030, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
