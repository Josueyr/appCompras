import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Injectable()
export class GuardService implements CanActivate{

  constructor(private autenticacionservice: AutenticacionService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if (this.autenticacionservice.isAuthenticated() === false)
        this.router.navigate(['/inises']);
    
    return this.autenticacionservice.isAuthenticated();
  }
}
