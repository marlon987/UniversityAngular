import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment } from '../domain/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  public url: string = '';

  constructor(public httpClient: HttpClient) {

    //this.url = 'http://localhost/University.API/api/Enrollments/';
    this.url = 'https://university-api.azurewebsites.net/api/Enrollments/';

  }


  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
    //return this.httpClient.get(this.url + 'GetEnrollments/');
  }


  public getById(id: number): Observable<any> {

    return this.httpClient.get(this.url + id);
    //return this.httpClient.get(this.url + 'GetEnrollments/' + id);
  }

  public save(enrollment: Enrollment): Observable<any> {
    return this.httpClient.post(this.url, enrollment);
  }

  public edit(enrollment: Enrollment): Observable<any> {
    return this.httpClient.put(this.url + '/' + enrollment.EnrollmentID, enrollment);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }
}
