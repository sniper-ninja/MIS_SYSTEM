import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

import {  Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder  } from '@angular/forms';
import EmpData from '@app/shared/EmpData';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {
  
  
  isLinear = false;
  EmpForm: FormGroup;
  des2: FormGroup;
  des3: FormGroup;
  des4: FormGroup;
  des31: FormGroup;
  des32:FormGroup;
  des33:FormGroup;
  des34:FormGroup;
  des35:FormGroup;
  des36:FormGroup;
  des37:FormGroup;
  des38:FormGroup;
  id: FormGroup;
  type2: FormGroup;
  type3: FormGroup;
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  opened: boolean;
  
  constructor(private formBuilder: FormBuilder,
     private http: HttpClient, 
     private router: Router, 
      private authenticationService: AuthenticationService,
      private userService: UserService,
      )
       {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
        }


    salutationControl = new FormControl('', [Validators.required]);



  


  ngOnInit(){
 

                  this.des2 = this.formBuilder.group({
                    pastteaching:     ['', Validators.required],
                    from1:     ['', Validators.required],
                    to1:     ['', Validators.required],
                    empid:     [this.currentUser.username, Validators.required],
                    Designation:     ['', Validators.required],
                    Department:     ['', Validators.required],
                    
                  });

                  this.type2 = this.formBuilder.group({
                    empid:     [this.currentUser.username, Validators.required],
                    pastind:     ['', Validators.required],
                    desig:     ['', Validators.required],
                    dep:     ['', Validators.required],
                    from:     ['', Validators.required],
                    to:     ['', Validators.required],
                  });

                  this.type3 = this.formBuilder.group({
                    empid:     [this.currentUser.username, Validators.required],
                    pastres:     ['', Validators.required],
                    desig:     ['', Validators.required],
                    dep:     ['', Validators.required],
                    from:     ['', Validators.required],
                    to:     ['', Validators.required],
                  });

                  // this.des3 = this.formBuilder.group({
                  //   empid:     [this.currentUser.firstName, Validators.required],
                  //   title:     ['', Validators.required],
                  //   name:     ['', Validators.required],
                  //   author:     ['', Validators.required],
                  //   ISSN:     ['', Validators.required],
                  //   volume_no:     ['', Validators.required],
                  //   issue_no:     ['', Validators.required],
                  //   pages:     ['', Validators.required],
                  //   Date:     ['', Validators.required],
                  //  });

                  // this.id = this.formBuilder.group({
                  //   id:     ['', Validators.required],
                  // });

                  this.des31 = this.formBuilder.group({ 
                     empid:     [this.currentUser.username, Validators.required],
                     title:     ['', Validators.required],
                     name:     ['', Validators.required],
                     author:     ['', Validators.required],
                     ISSN:     ['', Validators.required],
                     vol_no:     ['', Validators.required],
                     issue_no:     ['', Validators.required],
                     pages:     ['', Validators.required],
                     date:     ['', Validators.required],
                     Employee_ID:  ['', Validators.required],
                    });

                    this.des32 = this.formBuilder.group({
                     empid:     [this.currentUser.username, Validators.required],
                     title:     ['', Validators.required],
                     name:     ['', Validators.required],
                     author:     ['', Validators.required],
                     ISSN:     ['', Validators.required],
                     vol_no:     ['', Validators.required],
                     issue_no:     ['', Validators.required],
                     pages:     ['', Validators.required],
                     date:     ['', Validators.required],
                     Employee_ID:  ['', Validators.required],
                    });


                    this.des33 = this.formBuilder.group({
                     empid:     [this.currentUser.username, Validators.required],
                     title:     ['', Validators.required],
                     name:     ['', Validators.required],
                     author:     ['', Validators.required],
                     ISSN:     ['', Validators.required],
                     vol_no:     ['', Validators.required],
                     issue_no:     ['', Validators.required],
                     pages:     ['', Validators.required],
                     date:     ['', Validators.required],
                     Employee_ID:  ['', Validators.required],
                    });

                    this.des34 = this.formBuilder.group({
                     empid:     [this.currentUser.username, Validators.required],
                     title:     ['', Validators.required],
                     name:     ['', Validators.required],
                     author:     ['', Validators.required],
                     ISSN:     ['', Validators.required],
                     vol_no:     ['', Validators.required],
                     issue_no:     ['', Validators.required],
                     pages:     ['', Validators.required],
                     date:     ['', Validators.required],
                     Employee_ID:  ['', Validators.required],
                    });

                    this.des35 = this.formBuilder.group({
                     empid:     [this.currentUser.username, Validators.required],
                    author:     ['', Validators.required],
                    title:     ['', Validators.required],
                     pages:     ['', Validators.required],
                     date:     ['', Validators.required],
                     Employee_ID:  ['', Validators.required],
                    });

                    this.des36 = this.formBuilder.group({
                      empid:     [this.currentUser.username, Validators.required],
                      title:     ['', Validators.required],
                      name:     ['', Validators.required],
                      author:     ['', Validators.required],
                      ISSN:     ['', Validators.required],
                      vol_no:     ['', Validators.required],
                      issue_no:     ['', Validators.required],
                      pages:     ['', Validators.required],
                      date:     ['', Validators.required],
                      Employee_ID:  ['', Validators.required],
                     });

                     
                    this.des37 = this.formBuilder.group({
                      empid:     [this.currentUser.username, Validators.required],
                     noa:     ['', Validators.required],
                     ia:     ['', Validators.required],
                  //    pages:     ['', Validators.required],
                      date:     ['', Validators.required],
                      Employee_ID:  ['', Validators.required],
                     });

                     this.des38 = this.formBuilder.group({
                      empid:     [this.currentUser.username, Validators.required],
                       fa:     ['', Validators.required],
                       ta:     ['', Validators.required],
                       pog:     ['', Validators.required],
                    //    pages:     ['', Validators.required],
                        date:     ['', Validators.required],
                        Employee_ID:  ['', Validators.required],
                       });


  }

  
  Submit(){
      console.log(this.des2.value);
      this.http.post('http://10.10.11.137:8080/api/pi/emp', this.des2.value, ).subscribe(result => {alert(result)})
    }

    
    Submit31(){
      console.log(this.des31.value);
      this.http.post('http://10.10.11.137:8000/api/pi/emp/enter/admin/login/details/publications/national_journal', this.des31.value, ).subscribe(result => {alert(JSON.stringify(result))})
    }

    Submit32(){
      console.log(this.des32.value);
      this.http.post('http://10.10.11.137:8000/api/pi/emp/enter/admin/login/details/publications/international_journal', this.des32.value, ).subscribe(result => {alert(JSON.stringify(result))})
    }
    Submit33(){
      console.log(this.des33.value);
      this.http.post('http://10.10.11.137:8000/api/pi/emp/enter/admin/login/details/publications/national_conf', this.des33.value, ).subscribe(result => {alert(JSON.stringify(result))})
    }
    
    Submit34(){
      console.log(this.des34.value);
      this.http.post('http://10.10.11.137:8000/api/pi/emp/enter/admin/login/details/publications/international_conf', this.des34.value, ).subscribe(result => {alert(JSON.stringify(result))})
    }

    Submit35(){
      console.log(this.des35.value);
      this.http.post('http://10.10.11.137:8000/api/pi/emp/enter/admin/login/details/publications/book', this.des35.value, ).subscribe(result => {alert(JSON.stringify(result))})
    }

    
    Submit36(){
      console.log(this.des36.value);
      this.http.post('http://10.10.11.137:8000/api/pi/emp/enter/admin/login/details/publications/book', this.des36.value, ).subscribe(result => {alert(JSON.stringify(result))})
    }


    Submit37(){
      console.log(this.des37.value);
      this.http.post('http://10.10.11.137:8000/api/pi/emp/enter/admin/login/details/publications/book', this.des37.value, ).subscribe(result => {alert(JSON.stringify(result))})
    }

    Submit38(){
      console.log(this.des38.value);
      this.http.post('http://10.10.11.137:8000/api/pi/emp/enter/admin/login/details/publications/book', this.des38.value, ).subscribe(result => {alert(JSON.stringify(result))})
    }


    type(){
      console.log(this.type2.value);
      this.http.post('http://10.10.11.137:8080/api/pi/emp', this.type2.value, ).subscribe(result => {alert(result)})
    }

    typ(){
      console.log(this.type3.value);
      this.http.post('http://10.10.11.137:8080/api/pi/emp', this.type3.value, ).subscribe(result => {alert(result)})
    }


    Submit3(){
      console.log(this.des3.value);
      this.http.post('http://10.10.11.137:8080/api/pi/emp', this.des3.value, ).subscribe(result => {alert(result)})
    }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

  step=0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() { 
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
