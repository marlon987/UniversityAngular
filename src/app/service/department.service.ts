import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../domain/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public url: string = '';

  constructor(public httpClient: HttpClient) {

    this.url = 'http://localhost/University.API/api/Departments/';
    //this.url = 'https://university-api.azurewebsites.net/api/Departments/';
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
    //return this.httpClient.get(this.url + 'GetDepartments');
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + id);
    //return this.httpClient.get(this.url + 'GetDepartments'+ id);
  }

  public save(department: Department): Observable<any> {
    return this.httpClient.post(this.url, department);
  }

  public edit(department: Department): Observable<any> {
    return this.httpClient.put(this.url + department.DepartmentID, department);
  }

  
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

}




