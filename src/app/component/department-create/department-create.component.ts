import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/domain/department';
import { Instructor } from 'src/app/domain/instructor';
import { DepartmentService } from 'src/app/service/department.service';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit, OnDestroy {

  public id: number = 0;
  public department: Department = new Department(0, '', 0, new Date(), 0,
    new Instructor(0, '', '', new Date(),''));
  public instructors: Instructor[] = [];
  public subInstructors: Subscription = new Subscription;
  public instructorsFilter: Instructor[] = [];

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public departmentService: DepartmentService,public instructorService: InstructorService,
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.subInstructors.unsubscribe();
  }

  ngOnInit(): void {
    this.getInstructors();
    //this.getInstructorById();
  }

  getInstructorById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.instructorService.getById(this.id).subscribe(data => {
      this.instructors = data;
    });
  }

  
  public save() {
    console.log(this.department);

    if(this.department.Name.trim() ===''){
      this.showMsg = true;
      this.msg = 'The field Name is required';
      this.type = 'warning';
      return;
    }

    this.departmentService.save(this.department).subscribe(data => {
      this.router.navigate(['department-list']);
    },error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }

  getInstructors(){
    this.subInstructors = this.instructorService.getAll().subscribe(data =>{
      this.instructors = data;
      this.instructorsFilter = [];
    });
  }

}
