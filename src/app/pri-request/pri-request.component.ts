import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from '@app/_services';
import { ResourceLoader } from '@angular/compiler';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

@Component({
  selector: 'app-pri-request',
  templateUrl: './pri-request.component.html',
  styleUrls: ['./pri-request.component.css']
})
export class PriRequestComponent {
  private empid="";
  opened: boolean;
  displayedColumns: string[] =['EMPID', 'name', 'designation','Type','cert_id','duration','request'];
  public dataSource;//private
  public employees = [];
  salarydata: {EMPID: string,Certificate_id: string,flag: boolean}[]= [];


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService

  ) { }
  private _url = 'http://10.10.11.0:8000/api/pi/emp/liveprincipal'

  ngOnInit() {
     this.http.get<PeriodicElement[]>(this._url)
      .subscribe(data =>{this.employees = data;
        this.dataSource = new MatTableDataSource(this.employees);
      });
    }

   
    yes(Certificate_id: string,EMPID: string){
      this.salarydata=[];

      this.salarydata.push({"EMPID":EMPID,"Certificate_id":Certificate_id,"flag":true});
      console.log('Certificate_id= '+Certificate_id+" EMPID = "+EMPID);
       this.http.post('http://10.10.11.0:8000/api/pi/emp/salary/approveprinci',this.salarydata).subscribe(result => {alert(JSON.stringify(result))});
      
        this.ngOnInit();
      }
      no(Certificate_id: string,EMPID: string){
        this.salarydata=[];

        this.salarydata.push({"EMPID":EMPID,"Certificate_id":Certificate_id,"flag":false});
  
      console.log('Certificate_id= '+Certificate_id+" EMPID = "+EMPID);
      this.http.post('http://10.10.11.0:8000/api/pi/emp/salary/approveprinci', this.salarydata ).subscribe(result => {alert(JSON.stringify(result))});
       
         this.ngOnInit();
       }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

  
  }


