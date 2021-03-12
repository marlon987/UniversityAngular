import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  public id: number = 0;
  public course:Course = new Course(0,'', 0);

  constructor(public activatedRoute: ActivatedRoute,
    public courseService: CourseService) { }


  ngOnInit(): void {
    this.getById(); 
  }

  getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);
  
    this.courseService.getById(this.id).subscribe(data =>{
      this.course = data;
    });
  }
  

}
