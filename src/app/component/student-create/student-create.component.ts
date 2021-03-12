import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  public student: Student = new Student(0, '', '', new Date(), '');
  //public student! : Student; con signo de admiracion se puede instanciar tambien cuando es nulo y la variable tiene muchos datos

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public studentService: StudentService, public router: Router) { }

  ngOnInit(): void {
  }

  public save() {
    console.log(this.student);

    if(this.student.LastName.trim() ===''){
      this.showMsg = true;
      this.msg = 'The field LastName is required';
      this.type = 'warning';
      return;
    }

    this.studentService.save(this.student).subscribe(data => {
      this.router.navigate(['student-list']);
    },error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }

}
