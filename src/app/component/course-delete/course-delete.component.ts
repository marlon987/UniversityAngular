import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

  public id: number = 0;
  public course!: Course;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public activatedRoute: ActivatedRoute,
    public courseService: CourseService,
    public router: Router) { }

  ngOnInit(): void {
    this.getById();
  }

  getById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.courseService.getById(this.id).subscribe(data => {
      this.course = data;
    });
  }
  public delete() {
    console.log(this.course);


    this.courseService.delete(this.course.CourseID).subscribe(data => {
      this.router.navigate(['course-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}
