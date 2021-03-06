import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Employee } from '../shared/employee';
import { EmpService } from '../shared/emp.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmpService
  ) { }

  ngOnInit() {
    this.getSingleEmployee();
  }
  employee:Employee;
  getSingleEmployee(){
    var id = this.route.snapshot.params['id'];
    this.empService
      .getEmployee(id)
      .subscribe(employee =>{
          this.employee = employee[0];
          })
  };

  goBack(){
    this.router.navigate(['/employees']);
  }
}
