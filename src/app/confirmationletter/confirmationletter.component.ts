import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-confirmationletter',
  templateUrl: './confirmationletter.component.html',
  styleUrls: ['./confirmationletter.component.css']
})
export class ConfirmationletterComponent implements OnInit {

  opened: boolean;

  constructor(
    private router: Router,  
    private authenticationService: AuthenticationService,    
    ) { }



  ngOnInit() {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
