import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Officeassignment } from 'src/app/domain/officeassignment';
import { OfficeassignmentService } from 'src/app/service/officeassignment.service';

@Component({
  selector: 'app-officeassignment-list',
  templateUrl: './officeassignment-list.component.html',
  styleUrls: ['./officeassignment-list.component.css']
})
export class OfficeassignmentListComponent implements OnInit, OnDestroy {

  public officeassignments: Officeassignment[] = [];
  public subfficeassignments: Subscription = new Subscription;


  constructor(public officeassignmentService: OfficeassignmentService) { }
  ngOnDestroy(): void {
    this.subfficeassignments.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.subfficeassignments = this.officeassignmentService.getAll().subscribe(data => {
      this.officeassignments = data;
    });

  }


}
