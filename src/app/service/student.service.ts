import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../domain/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public url: string = '';

  constructor(public httpClient: HttpClient) {

    this.url = 'http://localhost/University.API/api/Students/';
    //this.url = 'https://university-api.azurewebsites.net/api/Students/';
    //this.url = './assets/MOCK_DATA_STUDENTS.json';
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.url );
    //return this.httpClient.get(this.url + 'GetStudents');
  }

  public getById(id: number): Observable<any> {
 // public getById(id: number): Student[] {
    //json
    //let students: Student[] = [];
    //let data = this.httpClient.get(this.url);

    //data.forEach(x => {
    //  students.push(x);
   // });
    //return students;

     return this.httpClient.get(this.url + id);
    //return this.httpClient.get(this.url + 'GetStudents'+ id);
  }

  public save(student: Student): Observable<any> {
    return this.httpClient.post(this.url, student);
  }

  public edit(student: Student): Observable<any> {
    return this.httpClient.put(this.url + student.ID, student);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

}
