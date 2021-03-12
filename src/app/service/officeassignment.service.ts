import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Officeassignment } from '../domain/officeassignment';

@Injectable({
  providedIn: 'root'
})
export class OfficeassignmentService {

  public url: string = '';

  constructor(public httpClient: HttpClient) {

    this.url = 'http://localhost/University.API/api/Officeassignment/';
    //this.url = 'https://university-api.azurewebsites.net/api/Officeassignments/';

  }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
    //return this.httpClient.get(this.url + 'GetOfficeassignments');
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + id);
    //return this.httpClient.get(this.url + 'GetOfficeassignments'+ id);
  }


  public save(officeassignment: Officeassignment): Observable<any> {
    return this.httpClient.post(this.url, officeassignment);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }


}
