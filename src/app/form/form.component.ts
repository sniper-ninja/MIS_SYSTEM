import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder  } from '@angular/forms';
import EmpData from '@app/shared/EmpData';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService, AuthenticationService } from '@app/_services';
import { Subscription } from 'rxjs';
import { User } from '@app/_models';

import { first } from 'rxjs/operators';

  export interface Designation {
    value: string;
  }
  
  export interface payband { 
    value: string;
  }
  

@Component({ templateUrl: 'form.component.html', styleUrls: ['./form.component.scss'] })
export class FormComponent{

  isLinear = false;
  EmpForm: FormGroup;
  des2: FormGroup;
  des31: FormGroup;
  des32:FormGroup;
  des33:FormGroup;
  des34:FormGroup;
  des35:FormGroup;
  des36:FormGroup;
  des37:FormGroup;
  des38:FormGroup;
  des4: FormGroup;
  form: FormGroup;
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];


  salutation: string[];
  sal: string[];
  model: EmpData;
  loading: boolean;

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient, 
    private router: Router,  
    private userService: UserService,
    private authenticationService: AuthenticationService,    
    ) { 
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });
    }


    salutationControl = new FormControl('', [Validators.required]);


  desgControl = new FormControl('', [Validators.required]);
  desgs: Designation[] = [
    {value: 'X'},
    {value: 'Y'},
    {value: 'Z'},
    {value: 'A'},
  ];


  paybandControl = new FormControl('', [Validators.required]);
  paybands: payband[] = [
    {value: '100-200'},
    {value: '200-300'},
    {value: '300-400'},
    {value: '400-500'},
  ];

  


  ngOnInit(){
    

    this.model = new EmpData('Emp_ID', 'Mr.', 'F_Name', 'M_Name', 'L_Name', 'Father_Name', 'Mother_Name', 'M', 'CAddress' , 'Permanent_Address',
 'Y', 2, 'Religion', 'Caste', 'DOB', 'Pan', 810903810, 9849849544, 'Official_Email', 'Personal_Email' );
                  this.salutation = ['Mr.', 'Ms.', 'Dr.'];
                  this.EmpForm = this.formBuilder.group({
                    salutation:   [this.model.salutation, Validators.required],
                    fname:        ['', Validators.required],
                    empid:     ['', Validators.required],
                    mname:        ['', Validators.required],
                    lname:        ['', Validators.required],
                    fathersName:  ['', Validators.required],
                    mothersName:  ['', Validators.required],
                    gender:       ['', Validators.required],
                    caddress:     ['', Validators.required],
                    paddress:     ['', Validators.required],
                    mstatus:      ['', Validators.required],
                    nchild:       ['', Validators.required],
                    religion:     ['', Validators.required],
                    caste:        ['', Validators.required],
                    dob:          ['', Validators.required],
                    pan:          ['', Validators.required],
                    aadhar:       ['', Validators.required],
                    phone:        ['', Validators.required],
                    tphone:        ['', Validators.required],
                    oemail:       ['', Validators.required],
                    pemail:       ['', Validators.required],
                  });
                  
                  this.des2 = this.formBuilder.group({ 
                    //empid:     [this.currentUser.firstName, Validators.required],
                    empid:     ['', Validators.required],
                    diploma:     ['', Validators.required],
                    class_diploma:     ['', Validators.required],
                    diplomainst:     ['', Validators.required],
                    diplomaboard:     ['', Validators.required],
                    diplomamonthyr:     ['', Validators.required],
                    qual_ug:     ['', Validators.required],
                    grade_ug:     ['', Validators.required],
                    uginst:     ['', Validators.required],
                    uguniversity:     ['', Validators.required],
                    ugmonthyr:     ['', Validators.required],
                    pgqual:     ['', Validators.required],
                    pgclass:     ['', Validators.required],
                    pginst:     ['', Validators.required],
                    pguniversity:     ['', Validators.required],
                    pgmonth:     ['', Validators.required],
                    phdsubj:     ['', Validators.required],
                    phdinst:     ['', Validators.required],
                    phduniversity:     ['', Validators.required],
                    areaspecial:     ['', Validators.required],
                    phdmonthyr:     ['', Validators.required],
                    });

                    this.des31 = this.formBuilder.group({ 
                     // empid:     [this.currentUser.firstName, Validators.required],
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
                     // empid:     [this.currentUser.firstName, Validators.required],
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
                     // empid:     [this.currentUser.firstName, Validators.required],
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
                     // empid:     [this.currentUser.firstName, Validators.required],
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
                     // empid:     [this.currentUser.firstName, Validators.required],
                     author:     ['', Validators.required],
                     title:     ['', Validators.required],
                      pages:     ['', Validators.required],
                      date:     ['', Validators.required],
                      Employee_ID:  ['', Validators.required],
                     });

                     this.des36 = this.formBuilder.group({
                      // empid:     [this.currentUser.firstName, Validators.required],
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
                      // empid:     [this.currentUser.firstName, Validators.required],
                      noa:     ['', Validators.required],
                      ia:     ['', Validators.required],
                   //    pages:     ['', Validators.required],
                       date:     ['', Validators.required],
                       Employee_ID:  ['', Validators.required],
                      });

                      this.des38 = this.formBuilder.group({
                        fa:     ['', Validators.required],
                        ta:     ['', Validators.required],
                        pog:     ['', Validators.required],
                     //    pages:     ['', Validators.required],
                         date:     ['', Validators.required],
                         Employee_ID:  ['', Validators.required],
                        });

                        this.sal = ['Teacher', 'Ass. Teacher', 'HOD', 'Pri', 'staff'];
                  this.des4 = this.formBuilder.group({
                 //   empid:     [this.currentUser.firstName, Validators.required],
                 Employee_ID:  ['', Validators.required],
                    bankaccno:     ['', Validators.required],
                    bankname:     ['', Validators.required],
                    banknamebr:     ['', Validators.required],
                    dep:     ['', Validators.required],
                    // designation:     ['', Validators.required],
                    salutation:   [this.sal, Validators.required],
                    date_join:     ['', Validators.required],
                    date_conf:     ['', Validators.required],
                    uni_apprperiodpg:     ['', Validators.required], //
                    uni_apprnumber:     ['', Validators.required],
                    dateaspg:     ['', Validators.required],
                    uni_apprperiodphd:     ['', Validators.required],
                    uni_apprnumberphd:     ['', Validators.required],
                    dateasphd:     ['', Validators.required],
                    ug_pg:     ['', Validators.required],
                    presentstaff:    ['', Validators.required],
                    pay:    ['', Validators.required],
                    paygrade:     ['', Validators.required],
                    uan:    ['', Validators.required],
                    pfaccno:    ['', Validators.required],
                    resign_date:    ['', Validators.required],
                    relieve_date:    ['', Validators.required],
                    staff_type:    ['', Validators.required],
                    sub_staff_type:    ['', Validators.required],
                    increment_month:    ['', Validators.required],
                    vacation:    ['', Validators.required],
                    remarks:    ['', Validators.required], //
                    univapprno:    ['', Validators.required],
                    univapprnodate:    ['', Validators.required],
                    app_expiry_temp:    ['', Validators.required], //
                    // remark : ['',Validators.required]//
                  });
  }


  onSubmit(){
    console.log(this.EmpForm.value);
    this.http.post('http://10.10.13.205:8000/api/pi/emp', this.EmpForm.value, ).subscribe(result => {alert(result); });
  }

  Submit(){
    console.log(this.des2.value);
      this.http.post('http://10.10.13.205:8000/api/pi/emp/enter/admin/login/details/education', this.des2.value, )
               .subscribe(result => {
                  alert(JSON.stringify(result));
                });
    }

    Submit31(){
      console.log(this.des31.value);
      this.http.post('http://10.10.13.205:8000/api/pi/emp/enter/admin/login/details/publications/national_journal', this.des31.value, )
              .subscribe(result => {
                  alert(JSON.stringify(result));
              });
    }

    Submit32(){
      console.log(this.des32.value);
      this.http.post('http://10.10.13.205:8000/api/pi/emp/enter/admin/login/details/publications/international_journal', this.des32.value, )
              .subscribe(result => {
                alert(JSON.stringify(result));
              });
    }
    Submit33(){
      console.log(this.des33.value);
      this.http.post('http://10.10.13.205:8000/api/pi/emp/enter/admin/login/details/publications/national_conf', this.des33.value, )
              .subscribe(result => {
                  alert(JSON.stringify(result));
              });
    }

    Submit34(){
      console.log(this.des34.value);
      this.http.post('http://10.10.13.205:8000/api/pi/emp/enter/admin/login/details/publications/international_conf', this.des34.value, )
              .subscribe(result => {
                alert(JSON.stringify(result));
              });
    }

    Submit35(){
      console.log(this.des35.value);
      this.http.post('http://10.10.13.205:8000/api/pi/emp/enter/admin/login/details/publications/book', this.des35.value, )
              .subscribe(result => {
                alert(JSON.stringify(result));
              });
    }


    Submit36(){
      console.log(this.des36.value);
      this.http.post('http://10.10.13.205:8000/api/pi/emp/enter/admin/login/details/publications/patentsgranted', this.des36.value, )
              .subscribe(result => {
                alert(JSON.stringify(result));
              });
    }

    Submit37(){
      console.log(this.des37.value);
      this.http.post('http://10.10.13.205:8000/api/pi/emp/enter/admin/login/details/publications/awardsrecieved', this.des37.value, )
              .subscribe(result => {
                alert(JSON.stringify(result));
              });
    }

    Submit38(){
      console.log(this.des38.value);
      this.http.post('http://10.10.13.205:8000/api/pi/emp/enter/admin/login/details/publications/grantsrecieved', this.des38.value, )
              .subscribe(result => {
                alert(JSON.stringify(result));
              });
    }

  Submit4(){
    console.log(this.des4.value);
    this.http.post('http://10.10.13.205:8000/api/pi/emp/enter/admin/login/details', this.des4.value, )
            .subscribe(result => {alert(result);
            });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

step = 0;

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