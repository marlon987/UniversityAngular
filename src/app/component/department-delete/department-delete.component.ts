import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/domain/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit {

  public id: number = 0;
  public department!: Department ;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public activatedRoute: ActivatedRoute,
    public departmentService: DepartmentService,
    public router: Router) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);    
  
    this.departmentService.getById(this.id).subscribe(data => {
      this.department = data;
    });
  }

  public delete() {
    console.log(this.department);


    this.departmentService.delete(this.department.DepartmentID).subscribe(data => {
      this.router.navigate(['department-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }


}
