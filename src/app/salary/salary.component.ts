import { Component, OnInit, Input, /*Input*/ } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError } from 'rxjs';
import { IEmployee } from '@app/employee';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf/dist/jspdf.node.debug.js';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Salary_CertificateService } from '@app/salary_certificate.service';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';

export interface xyz {
  id : string ,
  name: string,
}

@Component({
  selector: 'app-salary', 
  templateUrl: './salary.component.html',
  
  styleUrls: ['./salary.component.css'],
  // template:
  // <div class ="notification is-primary">
  //   <h3>Salary</h3>
  //   Say {{message}}
  // </div>
})
export class SalaryComponent implements OnInit{

  @Input() salarydata: {salaryid: string, empid: string}[]=[];
  public employees = [];
  public errorMsg;
  opened: boolean;
  
  constructor(
    private authenticationService: AuthenticationService,
    private http:HttpClient,
    private router: Router,
    private salarycertservice: Salary_CertificateService) { }
  
  private _url: string = '';

  ngOnInit() {
    this.salarydata=this.salarycertservice.salary;
    console.log(JSON.stringify(this.salarydata));

    this._url='http://10.10.11.0:8000/api/pi/emp/staff/salary?Employee_ID='+this.salarydata[0].empid+'&salaryid='+this.salarydata[0].salaryid;
    console.log('In salarycomponent salary_id = '+this.salarydata[0].salaryid);

    this.http.get<IEmployee[]>(this._url)
    .subscribe(data => {
      this.employees = data;
      console.log(data);
    });
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

  // public convert()
  // {
  //   var data = document.getElementById('pdf');

  //   html2canvas(data).then(canvas => {
  //   //necessary setting
  //   var imgWidth = 208;
  //   var pageHeight = 295;
  //   var imgHeight = canvas.height * imgWidth / canvas.width;
  //   var heightLeft = imgHeight;

  //   const contentDataURL = canvas.toDataURL('image/png')
  //   let pdf = new jspdf('p', 'mm', 'a4');//A4 size page of pdf
  //   var position = 0;
  //   pdf.addImage(contentDataURL, 'PNG', 0 , position , imgWidth , imgHeight)
  //   pdf.save('fi.pdf');//generated pdf
  //   });
  // }

  public convert() 
{
    var data = document.getElementById('pdf');
    html2canvas(document.body).then(canvas => 
        {
        // Few necessary setting options
        var imgWidth = 250;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jsPDF('l', 'mm', 'a4'); // A4 size page of PDF
        var position = -17;
        pdf.addImage(contentDataURL, 'PNG', 0, -15, pageHeight, heightLeft);
        pdf.save('MYPdf.pdf'); // Generated PDF 

    });


}

// public convert(){
//   var doc = new jsPDF();
//   var imgData = 'data:image/jpeg;base64,'+ Base64.encode('Koala.jpeg');
//   console.log(imgData);
//   doc.setFontSize(40);
//   doc.text(30, 20, 'Hello world!');
//   doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
//   doc.output('datauri');
// }
// @HostListener('window:beforeunload') goToPage() {
//   this.router.navigate(['/']);
// }

logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}


}
