import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  public id: number = 0;
  public student: Student = new Student(0, '', '', new Date(), '');

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public activatedRoute: ActivatedRoute,
    public studentService: StudentService,
    public router: Router) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);    
  
    this.studentService.getById(this.id).subscribe(data => {
      this.student = data;
    });
  }

  public edit() {
    console.log(this.student);

    if(this.student.LastName.trim() === ''){
      this.showMsg = true;
      this.msg = 'The field LastName is required';
      this.type = 'warning';
      return;
    }

    this.studentService.edit(this.student).subscribe(data => {
      this.router.navigate(['student-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }
}
