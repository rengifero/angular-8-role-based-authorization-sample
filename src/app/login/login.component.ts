import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  eRole = Role;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(role: Role) {


   /* console.log("this.eRole.User: "+this.eRole.User);    
   console.log("this.eRole.Admin: "+this.eRole.Admin);    
   console.log("this.eRole: "+this.eRole);    
       
   console.log(" login Object.values(Colors); :"+ Object.values(this.eRole));
 */
    this.authService.login(role);
    this.router.navigate(['/']);
  }  

  logout() {
    this.authService.logout();
  }
}