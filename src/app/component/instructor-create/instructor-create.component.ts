import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-instructor-create',
  templateUrl: './instructor-create.component.html',
  styleUrls: ['./instructor-create.component.css']
})
export class InstructorCreateComponent implements OnInit {

  public instructor:Instructor = new Instructor (0,'','',new Date(),'');

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public instructorService: InstructorService, public router: Router) { }

  ngOnInit(): void {
  }

  public save() {
    console.log(this.instructor);

    if(this.instructor.LastName.trim() ===''){
      this.showMsg = true;
      this.msg = 'The field LastName is required';
      this.type = 'warning';
      return;
    }

    this.instructorService.save(this.instructor).subscribe(data => {
      this.router.navigate(['instructor-list']);
    },error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }

}
