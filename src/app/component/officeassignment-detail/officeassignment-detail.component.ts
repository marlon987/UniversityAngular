import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from 'src/app/domain/instructor';
import { Officeassignment } from 'src/app/domain/officeassignment';
import { OfficeassignmentService } from 'src/app/service/officeassignment.service';

@Component({
  selector: 'app-officeassignment-detail',
  templateUrl: './officeassignment-detail.component.html',
  styleUrls: ['./officeassignment-detail.component.css']
})
export class OfficeassignmentDetailComponent implements OnInit {

  public id: number = 0;
  public officeassignment:Officeassignment = new Officeassignment (0,'',new Instructor(0,'','',new Date(),''));

  constructor(public activatedRoute: ActivatedRoute,
    public officeassignmentService: OfficeassignmentService) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);
  
    this.officeassignmentService.getById(this.id).subscribe(data =>{
      this.officeassignment = data;
    });
  }

}
