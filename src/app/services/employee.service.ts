import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Employee } from '../pages/shared/models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiurl = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) {}

  // getAllEmployee(): Observable<ApiResponse<Employee[]>>{
  //   return this.http.get<ApiResponse<Employee[]>>(this.apiurl);
  // }
  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiurl);
  }

  getEmployeeById(id:string): Observable<ApiResponse<Employee>>{
    return this.http.get<ApiResponse<Employee>>(`${this.apiurl}/${id}`);
  }

  createEmployee(employee:Employee): Observable<ApiResponse<Employee>>{
    return this.http.post<ApiResponse<Employee>>(this.apiurl, employee);
  }

  updateEmployee(id:string, employee:Employee): Observable<ApiResponse<Employee>>{
    return this.http.put<ApiResponse<Employee>>(`${this.apiurl}/${id}`, employee);
  }

  deleteEmployee(id:string): Observable<any>{
    return this.http.delete(`${this.apiurl}/${id}`);
  }

}
