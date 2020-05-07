import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError, from } from 'rxjs';
import { IEmployee } from '@app/employee';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from '@app/_services';
import { Salary_CertificateService } from '@app/salary_certificate.service';
import { NgForm } from '@angular/forms';

export interface xyz {
  id : string ,
  name: string,
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns: string[] = ['Type','HOD','Principal', 'Admin','request'];
  public id: string;
  public EmployeeID: string;
  opened: boolean;

  public employees = [];
  public errorMsg;
  constructor(

    private http: HttpClient,
           private router: Router,
           private authenticationService: AuthenticationService,
           private userService: UserService,
           private salarycertservice: Salary_CertificateService,

  ) { } 

  
  private _url: string ='http://10.10.11.0:8000/api/pi/emp/salary_check?Employee_ID=Emp01';
  public dataSource;//private
  ngOnInit() {
  
  //   this.http.get<IEmployee[]>(this._url)
  //   .subscribe(data => {this.employees = data;
  //     this.dataSource = new MatTableDataSource(this.employees);
  //   });
   }

   
    
   onSubmit(form: NgForm){  
     console.log(form.value.id.toString());
     this.EmployeeID= form.value.id.toString();
   this.id=  form.value.salary_id.toString();

    console.log('id = '+this.id);
    this.http.get<IEmployee[]>('http://10.10.11.0:8000/api/pi/emp/salary_check?Employee_ID='+form.value.id+'&salaryid='+form.value.salary_id)
    .subscribe(data => {this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
    });
    // alert(JSON.stringify(this.employees.values));
    this.salarycertservice.setdata(this.id,this.EmployeeID);

  }
  
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
