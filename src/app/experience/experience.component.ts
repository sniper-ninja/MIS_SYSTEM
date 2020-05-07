import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError } from 'rxjs';
import { IEmployee } from '@app/employee';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf/dist/jspdf.node.debug.js';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Experience_CertificateService } from '@app/experience_certificate.service';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';


export interface xyz {
  id : string ,
  name: string,
}


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() experiencedata: {experienceid: string, empid: string}[]=[];
  public employees = [];
  public errorMsg;
  opened: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private http:HttpClient,
    private router: Router,
    private salarycertservice: Experience_CertificateService) { }
  
  private _url: string = '';

  ngOnInit() {
    console.log(JSON.stringify(this.experiencedata));
    this.experiencedata=this.salarycertservice.experience;
    console.log(JSON.stringify(this.experiencedata));
    this._url='http://10.10.11.82:8000/api/pi/emp/salary_check?Employee_ID='+this.experiencedata[0].empid+'&experienceid='+this.experiencedata[0].experienceid;
    console.log('In experiencecomponent experience_id = '+this.experiencedata[0].experienceid);
    this.http.get<IEmployee[]>(this._url)
    .subscribe(data => this.employees = data);
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }


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

logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}


}
