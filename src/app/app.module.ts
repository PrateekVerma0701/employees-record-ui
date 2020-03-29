import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { EmployeeBasicDetailComponent } from './employee-basic-detail/employee-basic-detail.component';
import { EmployeeBasicDetailService } from './employee-basic-detail.service';
import { HttpClientModule } from '@angular/common/http';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { CreateCompanyComponent } from './create-company/create-company.component';

const appRoutes: Routes = [
  { path: 'employees/list', component: ListEmployeesComponent },
  { path: 'create/employee', component: CreateEmployeeComponent },
  { path: 'employee/basic/detail', component: EmployeeBasicDetailComponent },
  { path: 'create/company', component: CreateCompanyComponent },
  { path: '', redirectTo: '/employees/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeBasicDetailComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    CreateCompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeBasicDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
