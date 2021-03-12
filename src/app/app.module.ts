import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { HttpClientModule } from "@angular/common/http";
import { StudentDetailComponent } from './component/student-detail/student-detail.component'
import { FormsModule } from '@angular/forms'
import { StudentService } from './service/student.service';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseService } from './service/course.service';
import { CourseCreateComponent } from './component/course-create/course-create.component';
import { StudentCoursesListComponent } from './component/student-courses-list/student-courses-list.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorService } from './service/instructor.service';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { DepartmentService } from './service/department.service';
import { DepartmentCreateComponent } from './component/department-create/department-create.component';
import { DepartmentDeleteComponent } from './component/department-delete/department-delete.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { EnrollmentService } from './service/enrollment.service';
import { CourseDetailComponent } from './component/course-detail/course-detail.component';
import { DepartmentDetailComponent } from './component/department-detail/department-detail.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { OfficeassignmentListComponent } from './component/officeassignment-list/officeassignment-list.component';
import { InstructorOfficeListComponent } from './component/instructor-office-list/instructor-office-list.component';
import { OfficeassignmentService } from './service/officeassignment.service';
import { InstructorDetailComponent } from './component/instructor-detail/instructor-detail.component';
import { OfficeassignmentDetailComponent } from './component/officeassignment-detail/officeassignment-detail.component';
import { InstructorCreateComponent } from './component/instructor-create/instructor-create.component';
import { OfficeassignmentDeleteComponent } from './component/officeassignment-delete/officeassignment-delete.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { OfficeassignmentCreateComponent } from './component/officeassignment-create/officeassignment-create.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    CourseListComponent,
    CourseCreateComponent,
    StudentCoursesListComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    InstructorListComponent,
    DepartmentListComponent,
    DepartmentCreateComponent,
    DepartmentDeleteComponent,
    DepartmentEditComponent,
    CourseDetailComponent,
    DepartmentDetailComponent,
    InstructorDeleteComponent,
    OfficeassignmentListComponent,
    InstructorOfficeListComponent,
    InstructorDetailComponent,
    OfficeassignmentDetailComponent,
    InstructorCreateComponent,
    OfficeassignmentDeleteComponent,
    InstructorEditComponent,
    OfficeassignmentCreateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService,
    CourseService,
    InstructorService,
    EnrollmentService,
    OfficeassignmentService,
    DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
