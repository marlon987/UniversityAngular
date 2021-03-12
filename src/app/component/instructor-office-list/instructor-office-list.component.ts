import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Instructor } from 'src/app/domain/instructor';
import { Officeassignment } from 'src/app/domain/officeassignment';
import { InstructorService } from 'src/app/service/instructor.service';
import { OfficeassignmentService } from 'src/app/service/officeassignment.service';

@Component({
  selector: 'app-instructor-office-list',
  templateUrl: './instructor-office-list.component.html',
  styleUrls: ['./instructor-office-list.component.css']
})
export class InstructorOfficeListComponent implements OnInit, OnDestroy {

  public id: number = 0;
  public instructor: Instructor = new Instructor(0, '', '', new Date(), '');
  public office: Officeassignment = new Officeassignment(0, '', new Instructor(0, '', '', new Date(), ''));
  public offices: Officeassignment[] = [];
  public ifofficesExist: boolean = false;
  public subOffices: Subscription = new Subscription();

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public instructorService: InstructorService,
    public officeService: OfficeassignmentService,
    public activedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnDestroy(): void {
    this.subOffices.unsubscribe();
  }

  ngOnInit(): void {
    this.getInstructorById();
    this.getOfficesByInstructorId();
  }

  getInstructorById() {
    let param = this.activedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.instructorService.getById(this.id).subscribe((data) => {
      this.instructor = data;
    });
  }
  getOfficesByInstructorId() {
    let param = this.activedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.subOffices = this.officeService.getAll().subscribe((data) => {
      this.offices = data;
      //filtrar por el id
      this.offices = this.offices.filter(x => x.InstructorID ===   this.id);

      if (this.offices.length > 0) {
        this.ifofficesExist = true;
        this.office = this.offices[0];
      } 
    });
  }

  public saveOffice() {

    this.office.InstructorID = this.id;
    console.log(this.office);

    this.officeService.save(this.office).subscribe(data => {
      this.router.navigate(['/instructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }
}
