import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core'; 
import { HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from '@app/_services';
import { Salary_CertificateService } from '@app/salary_certificate.service';


export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}


@Component({
  selector: 'app-adminreq',
  templateUrl: './adminreq.component.html',
  styleUrls: ['./adminreq.component.css'],
  // template:
  // <h1>parent < /h1>
  // < app - salary [message]= "message" > </app-salary>
})
export class AdminreqComponent implements OnInit {

 
  displayedColumns: string[] = ['EMPID', 'name', 'lastname', 'designation', 'Type', 'salaryid', 'request'];
  public dataSource;//private
  public employees = [];
  formBuilder: any;
  opened: boolean;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private salarycertservice: Salary_CertificateService,
    
    ) { }
    // message = "hello world"// send this from adminreq to salary component
  
  
  private _url: string = 'http://10.10.15.99:8000/api/pi/emp/salary_check/admin';
  
  ngOnInit() {

    this.http.get<PeriodicElement[]>(this._url)
    .subscribe(data => {this.employees = data;
        this.dataSource = new MatTableDataSource(this.employees);
      });
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
   
  yes(id: string,EmployeeID: string){
     console.log('id='+id+' empid='+EmployeeID);
    //  this.http.post('http://10.10.11.137:8000/api/pi/emp', prop ).subscribe(result => {alert(result)})
    this.salarycertservice.setdata(id,EmployeeID);
     
  }

  
  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

}
