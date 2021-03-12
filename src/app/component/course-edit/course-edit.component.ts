import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  public id: number = 0;
  public course!: Course;


  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';



  constructor(public courseService: CourseService, public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  getById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    //let param = this.activatedRoute.params['_values'];
    this.id = Number(param);

    this.courseService.getById(this.id).subscribe(data => {
      this.course = data;
    });
  }

  public edit() {
    console.log(this.course);

    if (this.course.Title.trim() === '') {
      this.showMsg = true;
      this.msg = 'The field LastName is required';
      this.type = 'warning';
      return;
    }

    this.courseService.edit(this.course).subscribe(data => {
      this.router.navigate(['course-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }
}


