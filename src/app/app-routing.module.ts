import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentDetailComponent } from './component/student-detail/student-detail.component'
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseCreateComponent } from './component/course-create/course-create.component';
import { StudentCoursesListComponent } from './component/student-courses-list/student-courses-list.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { DepartmentCreateComponent } from './component/department-create/department-create.component';
import { DepartmentDeleteComponent } from './component/department-delete/department-delete.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { CourseDetailComponent } from './component/course-detail/course-detail.component';
import { DepartmentDetailComponent } from './component/department-detail/department-detail.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { OfficeassignmentListComponent } from './component/officeassignment-list/officeassignment-list.component';
import { InstructorOfficeListComponent } from './component/instructor-office-list/instructor-office-list.component';
import { InstructorDetailComponent } from './component/instructor-detail/instructor-detail.component';
import { OfficeassignmentDetailComponent } from './component/officeassignment-detail/officeassignment-detail.component';
import { InstructorCreateComponent } from './component/instructor-create/instructor-create.component';
import { OfficeassignmentDeleteComponent } from './component/officeassignment-delete/officeassignment-delete.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { OfficeassignmentCreateComponent } from './component/officeassignment-create/officeassignment-create.component';

const routes: Routes = [
  { path: 'student-list', component: StudentListComponent },
  { path: 'student-detail/:id', component: StudentDetailComponent },
  { path: 'student-create', component: StudentCreateComponent },
  { path: 'student-edit/:id', component: StudentEditComponent },
  { path: 'student-delete/:id', component: StudentDeleteComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'course-detail/:id', component: CourseDetailComponent },
  { path: 'course-create', component: CourseCreateComponent },
  { path: 'course-edit/:id', component: CourseEditComponent },
  { path: 'course-delete/:id', component: CourseDeleteComponent },
  { path: 'student-courses-list/:id', component: StudentCoursesListComponent },
  { path: 'instructor-list', component: InstructorListComponent },
  { path: 'instructor-create', component: InstructorCreateComponent },
  { path: 'instructor-edit/:id', component: InstructorEditComponent },
  { path: 'instructor-detail/:id', component: InstructorDetailComponent },
  { path: 'instructor-delete/:id', component: InstructorDeleteComponent },
  { path: 'department-list', component: DepartmentListComponent },
  { path: 'department-detail/:id', component: DepartmentDetailComponent },
  { path: 'department-create', component: DepartmentCreateComponent },
  { path: 'department-delete/:id', component: DepartmentDeleteComponent },
  { path: 'department-edit/:id', component: DepartmentEditComponent },
  { path: 'officeassignment-list', component: OfficeassignmentListComponent },
  { path: 'officeassignment-create', component: OfficeassignmentCreateComponent },
  { path: 'officeassignment-detail/:id', component: OfficeassignmentDetailComponent },
  { path: 'officeassignment-delete/:id', component: OfficeassignmentDeleteComponent },
  { path: 'instructor-office-list/:id', component: InstructorOfficeListComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
