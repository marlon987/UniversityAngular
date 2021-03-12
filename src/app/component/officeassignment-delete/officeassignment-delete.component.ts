import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instructor } from 'src/app/domain/instructor';
import { Officeassignment } from 'src/app/domain/officeassignment';
import { OfficeassignmentService } from 'src/app/service/officeassignment.service';

@Component({
  selector: 'app-officeassignment-delete',
  templateUrl: './officeassignment-delete.component.html',
  styleUrls: ['./officeassignment-delete.component.css']
})
export class OfficeassignmentDeleteComponent implements OnInit {

  public id: number = 0;
  public officeassignment:Officeassignment = new Officeassignment (0,'',new Instructor(0,'','',new Date(),''));

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public activatedRoute: ActivatedRoute,
    public officeassignmentService: OfficeassignmentService,
    public router: Router) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);    
  
    this.officeassignmentService.getById(this.id).subscribe(data => {
      this.officeassignment = data;
    });
  }

  public delete() {
    console.log(this.officeassignment);


    this.officeassignmentService.delete(this.officeassignment.InstructorID).subscribe(data => {
      this.router.navigate(['officeassignment-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}
