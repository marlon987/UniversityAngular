import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

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

  public delete() {
    console.log(this.student);


    this.studentService.delete(this.student.ID).subscribe(data => {
      this.router.navigate(['student-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}
