import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-instructor-delete',
  templateUrl: './instructor-delete.component.html',
  styleUrls: ['./instructor-delete.component.css']
})
export class InstructorDeleteComponent implements OnInit {

  public id: number = 0;
  public instructor!: Instructor ;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public activatedRoute: ActivatedRoute,
    public instructorService: InstructorService,
    public router: Router) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);    
  
    this.instructorService.getById(this.id).subscribe(data => {
      this.instructor = data;
    });
  }

  public delete() {
    console.log(this.instructor);


    this.instructorService.delete(this.instructor.ID).subscribe(data => {
      this.router.navigate(['instructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}
