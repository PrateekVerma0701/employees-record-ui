import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBasicDetailService {

  private _url: string = "/api/v1.0/employee/basic/2311";

  constructor(private http:HttpClient) { }
  
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorhandler));
   }

  errorhandler(error: HttpErrorResponse)
  {
    return throwError(error.message || "Server Error")
  }
}
