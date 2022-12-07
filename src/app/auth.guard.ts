import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './Servicios/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor (private apiService: ApiService,
    private router: Router) {}

canActivate (): boolean {
if (this.apiService.loggedIn()) {
return true;
}
this.router.navigate(['/login'])
return false;
}

  
}
