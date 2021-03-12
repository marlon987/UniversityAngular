import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  public id: number = 0;
  public student: Student = new Student(0, '', '', new Date(), '');

  constructor(public activatedRoute: ActivatedRoute,
  public studentService: StudentService){

}

ngOnInit(): void {
this.getById();
}

getById(){
  let param = this.activatedRoute.snapshot.paramMap.get('id');
  this.id = Number(param);

  this.studentService.getById(this.id).subscribe(data =>{
    this.student = data;
  });
}

}
