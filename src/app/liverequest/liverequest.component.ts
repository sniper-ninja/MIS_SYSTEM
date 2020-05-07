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



export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

@Component({
  selector: 'app-liverequest',
  templateUrl: './liverequest.component.html',
  styleUrls: ['./liverequest.component.css']
})


export class LiverequestComponent {
  
  displayedColumns: string[] = ['EMPID', 'name', 'designation','Type','salaryid','duration','request'];
  public dataSource;//private
  public employees = [];
  formBuilder: any;
  salarydata: {EMPID: string,Certificate_id: string,flag: boolean}[]= [];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService

  ) {  }
  
  
  private _url: string = 'http://10.10.11.0:8000/api/pi/emp/livehod';
  
  ngOnInit() {

    this.http.get<PeriodicElement[]>(this._url)
    .subscribe(data =>{this.employees = data;
        this.dataSource = new MatTableDataSource(this.employees);
      });
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
   
  yes(Certificate_id: string,EMPID: string){
    this.salarydata=[];
    this.salarydata.push({"EMPID":EMPID,"Certificate_id":Certificate_id,"flag":true});
    console.log('Certificate_id= '+Certificate_id+" EMPID = "+EMPID);
     // tslint:disable-next-line: max-line-length
     this.http.post('http://10.10.11.0:8000/api/pi/emp/salary/approvehod_salary',this.salarydata).subscribe(result => {alert(JSON.stringify(result))});
    // tslint:disable-next-line: no-trailing-whitespace
    
      this.ngOnInit();
    }
    no(Certificate_id: string,EMPID: string){
      this.salarydata=[];

      this.salarydata.push({"EMPID":EMPID,"Certificate_id":Certificate_id,"flag":false});

    console.log('Certificate_id= '+Certificate_id+" EMPID = "+EMPID);
    // tslint:disable-next-line: max-line-length
    this.http.post('http://10.10.11.0:8000/api/pi/emp/salary/approvehod_salary', this.salarydata ).subscribe(result => {alert(JSON.stringify(result))});
     // tslint:disable-next-line: no-trailing-whitespace
     
       this.ngOnInit();
     }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
