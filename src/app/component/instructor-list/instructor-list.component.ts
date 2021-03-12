import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit, OnDestroy {

  public instructors: Instructor[] = [];
  public subInstructors: Subscription = new Subscription;

  constructor(public InstructorService: InstructorService) { }
  ngOnDestroy(): void {
    this.subInstructors.unsubscribe()
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.subInstructors = this.InstructorService.getAll().subscribe(data => {
      this.instructors = data;
    });

  }


}
