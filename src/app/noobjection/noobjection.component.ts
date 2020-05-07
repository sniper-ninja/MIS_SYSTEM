import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-noobjection',
  templateUrl: './noobjection.component.html',
  styleUrls: ['./noobjection.component.css']
})
export class NoobjectionComponent implements OnInit {

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
