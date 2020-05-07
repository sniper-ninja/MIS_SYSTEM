import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

//   currentUser: User;
//   currentUserSubscription: Subscription;
//   users: User[] = [];

//   constructor(
//       private router: Router,
//       private authenticationService: AuthenticationService,
//       private userService: UserService
//   ) {
//       this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
//           this.currentUser = user;
//       });
//   }

//   ngOnInit() {
//       this.loadAllUsers();
//   }
  
//   ngOnDestroy() {
//       // unsubscribe to ensure no memory leaks
//       this.currentUserSubscription.unsubscribe();
//   }

//   deleteUser(id: number) {
//       this.userService.delete(id).pipe(first()).subscribe(() => {
//           this.loadAllUsers()
//       });
//   }

//   private loadAllUsers() {
//       this.userService.getAll().pipe(first()).subscribe(users => {
//           this.users = users;
//       });
//   }
opened: boolean;

private empid="";
displayedColumns: string[] = ['EMPID', 'name', 'lastname', 'designation'];
public dataSource;//private
public employees = [];

applyFilter(filterValue:'name') {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

applyFilt(filterValue:'designation') {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

constructor(
    private http: HttpClient,
           private router: Router,
           private authenticationService: AuthenticationService,
           private userService: UserService
       ) {
           
       }
       
       
  // private _url: string = '/assets/data/emplist.json';
  private _url = 'http://10.10.14.1:8000/api/pi/emp/allemps'

ngOnInit() {
   this.http.get<PeriodicElement[]>(this._url)
    .subscribe(data =>{this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
    });
  }

 
  yes(prop){
    console.log(prop);
    this.http.post('http://10.10.13.66:8000/api/pi/emp/approveprinci', prop ).subscribe(result => {alert(result)})
  }
  
  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

}
