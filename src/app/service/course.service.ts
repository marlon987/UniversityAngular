import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../domain/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public url: string = '';

  constructor(public httpClient: HttpClient) {

    this.url = 'http://localhost/University.API/api/Courses/';
    //this.url = 'https://university-api.azurewebsites.net/api/Courses/';
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
    //return this.httpClient.get(this.url + 'GetCourses/');
  }

  public getById(id: number): Observable<any> {

    return this.httpClient.get(this.url + id);
    //return this.httpClient.get(this.url + 'GetCourses/' + id);
  }

  public getCoursesById(id: number): Observable<any> {

    return this.httpClient.get(this.url + 'GetCoursesByStudentId/' + id);
  }

  public save(course: Course): Observable<any> {
    return this.httpClient.post(this.url, course);
  }

  public edit(course: Course): Observable<any> {
    return this.httpClient.put(this.url + '/'+ course.CourseID, course);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }
}
