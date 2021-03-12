import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { Enrollment } from 'src/app/domain/enrollment';
import { Student } from 'src/app/domain/student';
import { CourseService } from 'src/app/service/course.service';
import { EnrollmentService } from 'src/app/service/enrollment.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-courses-list',
  templateUrl: './student-courses-list.component.html',
  styleUrls: ['./student-courses-list.component.css']
})
export class StudentCoursesListComponent implements OnInit, OnDestroy {

  public id: number = 0;
  public student: Student = new Student(0, '', '', new Date(), '');
  public courses: Course[] = [];
  public coursesFilter: Course[] = [];
  public enrollments: Enrollment[] = [];
  public subEnrollments: Subscription = new Subscription;
  public subCourses: Subscription = new Subscription;
  public enrollment: Enrollment = new Enrollment(0, 0, 0, 0,
    new Course(0, '', 0),
    new Student(0, '', '', new Date(), ''));


  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';


  constructor(public activatedRoute: ActivatedRoute,
    public studentService: StudentService,
    public courseService: CourseService,
    public enrollmentService: EnrollmentService,
    public router: Router) { }

  ngOnDestroy(): void {
    this.subEnrollments.unsubscribe();
    this.subCourses.unsubscribe();
  }

  ngOnInit(): void {
    this.getStudentById();
    this.getCoursesByStudentId();
  }

  getStudentById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.studentService.getById(this.id).subscribe(data => {
      this.student = data;
    });
  }

  getCourses() {
    this.subCourses = this.courseService.getAll().subscribe(data => {
      this.courses = data;

      //this.enrollments.forEach(x => {

        //this.coursesFilter.push(x.Course);
      //});


      //this.courses = this.courses.filter(x => !this.coursesFilter.includes(x));
    });
  }

  public deleteEnrollment(id: number) {
    this.enrollmentService.delete(id).subscribe(data => {
      this.getCoursesByStudentId();
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

  public saveEnrollment() {

    this.enrollment.StudentID = this.student.ID;

    this.enrollmentService.save(this.enrollment).subscribe(data => {
      this.getCoursesByStudentId();
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

  getCoursesByStudentId() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.subEnrollments = this.enrollmentService.getAll().subscribe(data => {
      this.enrollments = data;
      //filtrar por el id del estudiante
      this.enrollments = this.enrollments.filter(x => x.StudentID === this.id);
    });

    this.getCourses();
  }

  

}
