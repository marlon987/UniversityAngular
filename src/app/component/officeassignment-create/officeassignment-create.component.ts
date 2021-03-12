import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instructor } from 'src/app/domain/instructor';
import { Officeassignment } from 'src/app/domain/officeassignment';
import { OfficeassignmentService } from 'src/app/service/officeassignment.service';

@Component({
  selector: 'app-officeassignment-create',
  templateUrl: './officeassignment-create.component.html',
  styleUrls: ['./officeassignment-create.component.css']
})
export class OfficeassignmentCreateComponent implements OnInit {

  public id: number = 0;
  public officeassignment: Officeassignment = new Officeassignment(0, '',
    new Instructor(0, '', '', new Date(), ''));

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public officeassignmentService: OfficeassignmentService,
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public save() {
    console.log(this.officeassignment);

    if(this.officeassignment.Location.trim() ===''){
      this.showMsg = true;
      this.msg = 'The field Name is required';
      this.type = 'warning';
      return;
    }

    this.officeassignmentService.save(this.officeassignment).subscribe(data => {
      this.router.navigate(['officeassignment-list']);
    },error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }

}
