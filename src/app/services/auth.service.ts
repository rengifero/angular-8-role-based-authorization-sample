import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';

@Injectable()
export class AuthService {
    private user: User;

    isAuthorized() {

      console.log("!!this.user :"+!!this.user);
    
    
        return !!this.user;
    }

    hasRole(role: Role) {
        return this.isAuthorized() && this.user.cRole === role;
    }

    login(role: Role) {
      console.log("login(role) :"+role);
      

      this.user = { 
        cRole: role
       };
       console.log(" this.user.Role :"+ this.user.cRole);
     
       console.log(" Object.values(Colors); :"+ Object.values(this.user.cRole));
    }

    logout() {
      this.user = null;
    }
}
